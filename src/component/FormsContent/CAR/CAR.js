import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CAR.module.css';
import Loader from '../../../Loader/Loader';
import CARInfo from './CARInfo/CARInfo';
import CARClassification from './CARClassification/CARClassification';
import CARWorkflowPlan from './CARWorkflowPlan/CARWorkflowPlan';
import CARAuthorization from './CARAuthorization/CARAuthorization';
import LandingHeader from '../../Landing/LandingHeader/LandingHeader';
import Position from '../../Position/Position';

class CAR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    }
  }

  getCAR() {
    setTimeout(() => {
      fetch("")
        .then(result => result)
        .then((data) => {
          this.setState({ hidden: false })
        })
    }, 2000);
  }

  componentDidMount() {
    this.getCAR();
  }

  submitData(e) {
    e.preventDefault();
    let carData = {
      name: e.target.name.value,
      department: e.target.department.value,
      date: e.target.date.value,
      product_type: e.target.product_type.value,
      product_name: e.target.product_name.value,
      supplier: e.target.supplier.value,
      reject_desc: e.target.reject_desc.value,
      reject_qty: e.target.reject_qty.value,
      qty: e.target.qty.value,
      doc_number: e.target.doc_number.value,
      dept_head: e.target.dept_head.value,
      classification: e.target.classification.value,
      related_issues: e.target.related_issues.value,
      rel_issues_others_desc: e.target.rel_issues_others_desc.value,
      station_detected: e.target.station_detected.value,
      created_by: e.target.created_by.value,
      supervisor: e.target.supervisor.value,
      position: e.target.position.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(carData)
    }

    fetch('http://localhost:8000/car', requestOptions)
    // .then(result => result.json())
    // .then(response => {
    //   this.setState({ response: this.state.response })
    // })

  }

  onSubmit() {
    alert('You have submitted a report')
  }

  render() {
    return (
      <>
        {
          !this.state.hidden ? <div className={styles.Landing}>
            <LandingHeader />
            <div className={styles.content + ' d-flex p-3 px-5'}>
              <Position />
              <div className={styles.FormsContent + '  col-8 container p-2'}>
                <form onSubmit={this.submitData}>
                  <div className={styles.QMR}>
                    <div className={styles.QMR_title + ' d-flex text-light pt-2 px-2'}>
                      <div className='col'>
                        <h5><i className="text-light">Corrective Action Report</i></h5>
                      </div>
                      <div className='col d-flex justify-content-end mx-1'>
                        <h5><i className="text-light">REV# - 001</i></h5>
                      </div>
                    </div>
                    <hr className='text-muted mx-2'></hr>
                    <div className='p-2'>
                      <CARInfo />
                      <hr></hr>
                      <CARClassification />
                      <hr className='mx-2'></hr>
                      <CARWorkflowPlan />
                    </div>
                    <hr className='mx-2'></hr>
                    <CARAuthorization />
                    <hr className='mx-2'></hr>
                    <div className='d-flex justify-content-end p-3 mx-2'>
                      <div className='mx-1'>
                        <button type="submit" onClick={this.onSubmit} className="btn btn-success">Submit</button>
                      </div>
                      <div className='mx-1'>
                        <button type="button" className="btn btn-primary">Print</button>
                      </div>
                    </div>
                  </div >
                </form>
              </div>
              <div className={styles.Forms_cont + ' border rounded col-2 mx-1 p-3'}>
                <div className={styles + ' d-flex justify-content-center text-success p-3'}>
                  <h5 className="text-uppercase fw-bolder text-decoration-underline">Forms/Records</h5>
                </div>
                <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
                  < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'}>QMR(Paper)</h6>
                </div>
                <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
                  < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'}>QMR(Non-Paper)</h6>
                </div>
                <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
                  < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'}>CAR</h6>
                </div>
              </div>
            </div>
          </div > : <Loader />
        }
      </>
    )
  }
}

export default CAR;
