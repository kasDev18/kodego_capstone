import React, { Component } from 'react';
import styles from './QMR.module.css';
import QMRPaperInfo from './QMRPaperInfo/QMRPaperInfo';
import QMRPaperLegend from './QMRPaperLegend/QMRPaperLegend';
import QMRPaperCriteria from './QMRPaperCriteria/QMRPaperCriteria';
import LandingHeader from '../../Landing/LandingHeader/LandingHeader';
import Position from '../../Position/Position';
import Loader from '../../../Loader/Loader';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class QMR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    }
  }

  getQMRPaper() {
    setTimeout(() => {
      fetch("")
        .then(result => result)
        .then((data) => {
          this.setState({ hidden: false })
        })
    }, 1000);
  }

  componentDidMount() {
    this.getQMRPaper();
  }

  submitData(e) {
    e.preventDefault();
    let qmrPaperData = {
      name: e.target.name.value,
      dept_name: e.target.dept_name.value,
      date: e.target.date.value,
      prod_type: e.target.prod_type.value,
      prod_name: e.target.prod_name.value,
      supplier: e.target.supplier.value,
      qty: e.target.qty.value,
      doc_number: e.target.doc_number.value,
      dept_head: e.target.dept_head.value,
      scratch: e.target.scratch.value,
      spot: e.target.spot.value,
      contamination: e.target.contamination.value,
      discoloration: e.target.discoloration.value,
      odor: e.target.odor.value,
      hole: e.target.hole.value,
      foreign_mat: e.target.foreign_mat.value,
      missing_qty: e.target.missing_qty.value,
      mishandling: e.target.mishandling.value,
      proper_arrangement: e.target.proper_arrangement.value,
      missing_docs: e.target.missing_docs.value,
      signed: e.target.signed.value,
      tampering: e.target.tampering.value,
      liquid_contamination: e.target.liquid_contamination.value,
      crumpled: e.target.crumpled.value,
      orig_docs: e.target.orig_docs.value,
      secured: e.target.secured.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(qmrPaperData)
    }
    fetch('http://localhost:8000/qmr_paper', requestOptions)
    const customId = "custom-id-yes";
    toast.success(' Successfully Added!', {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
      hideProgressBar: true,
      autoClose: 2000,
    });
  }

  RedirectInk() {
    window.location.href = "/qmr/non_paper/ink"
  }

  RedirectCAR() {
    window.location.href = "/car"
  }

  render() {
    return (
      <>
        {
          !this.state.hidden ? <div className={styles.Landing}>
            <LandingHeader />
            <ToastContainer limit={1} transition={Flip} className={styles.toast} />
            <div className={styles.content + ' d-flex p-3 px-5'}>
              <Position />
              <div className={styles.FormsContent + '  col-8 container p-2'}>
                <form onSubmit={this.submitData}>
                  <div className={styles.QMR}>
                    <div className={styles.QMR_title + ' text-light pt-2 px-2'}>
                      <h5><i className="text-light">Quality Monitoring Report (Paper)</i></h5>
                      <hr className='text-muted'></hr>
                    </div>
                    <div className='p-2'>
                      <QMRPaperInfo />
                      <hr></hr>
                      <div>
                        <span className={styles + ' text-light mx-3'}>Please choose carefully the right answer below</span>
                      </div>
                      <QMRPaperLegend />
                      <QMRPaperCriteria />
                    </div>
                    <div className='d-flex justify-content-end p-3 mx-2'>
                      <div className='mx-1'>
                        <button type="submit" className={styles.btn_submit + ' btn btn-success'}>Submit</button>
                      </div>
                      <div className='mx-1'>
                        <button type="button" className={styles.btn_print + ' btn btn-primary'}>Print</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.Forms_cont + ' border rounded col-2 mx-1 p-3'}>
                <div className={styles + ' d-flex justify-content-center text-success p-3'}>
                  <h5 className="text-uppercase fw-bolder text-decoration-underline">Forms/Records</h5>
                </div>
                <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
                  < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'}>QMR(Paper)</h6>
                </div>
                <div className={styles.Forms_Records + ' text-dark px-2 accordion'}>
                  <div className={styles.accordion + ' accordion-item text-success'}>
                    < h6 className={styles.Forms_title + '  d-flex justify-content-center text-success border rounded border-success accordion-header'} >
                      <button className="accordion-button bg-transparent border-0 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Non-Paper
                      </button>
                    </h6>
                    <div id={'collapseOne'} className={styles.Forms_collapse + " accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        < p onClick={() => this.RedirectInk()} className={styles + '  d-flex justify-content-center border rounded border-success text-success px-2 accordion-header'} >
                          <button className=" text-success bg-transparent border-0" >
                            Ink
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
                  < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'} onClick={() => this.RedirectCAR()}>CAR</h6>
                </div>
              </div>
            </div>
          </div > : <Loader />
        }
      </>
    )
  }
}


export default QMR;
