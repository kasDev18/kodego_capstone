import React, { Component } from 'react';
import styles from './QMR.module.css';
import QMRPaperInfo from './QMRPaperInfo/QMRPaperInfo';
import QMRPaperLegend from './QMRPaperLegend/QMRPaperLegend';
import QMRPaperCriteria from './QMRPaperCriteria/QMRPaperCriteria';

class QMR extends Component {
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
      orig_docs: e.target.orig_docs.value,
      secured: e.target.secured.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(qmrPaperData)
    }
    fetch('http://localhost:8000/qmr_paper', requestOptions)
  }

  onSubmit() {
    alert('You have submitted a report')
  }

  render() {
    return (
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
              <button type="submit" onClick={this.onSubmit} class="btn btn-success">Submit</button>
            </div>
            <div className='mx-1'>
              <button type="button" class="btn btn-primary">Print</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}


export default QMR;
