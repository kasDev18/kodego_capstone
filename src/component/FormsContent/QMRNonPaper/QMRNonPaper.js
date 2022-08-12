import React, { Component } from 'react';
import styles from './QMRNonPaper.module.css';
import QMRNonPaperInfo from './QMRNonPaperInfo/QMRNonPaperInfo';
import QMRNonPaperInkColor from './QMRNonPaperInkColor/QMRNonPaperInkColor';
import QMRNonPaperLegend from './QMRNonPaperLegend/QMRNonPaperLegend';
import QMRNonPaperInkCriteria from './QMRNonPaperInkCriteria/QMRNonPaperInkCriteria';

class QMRNonPaper extends Component {

  submitData(e) {
    e.preventDefault();
    let inkData = {
      name: e.target.name.value,
      department: e.target.department.value,
      date: e.target.date.value,
      prod_type: e.target.prod_type.value,
      prod_name: e.target.prod_name.value,
      supplier: e.target.supplier.value,
      qty: e.target.qty.value,
      doc_number: e.target.doc_number.value,
      dept_head: e.target.dept_head.value,
      complete_qty: e.target.complete_qty.value,
      discoloration: e.target.discoloration.value,
      foreign_mat: e.target.foreign_mat.value,
      dent_broken: e.target.dent_broken.value,
      leak: e.target.leak.value,
      liquid_contam: e.target.liquid_contam.value,
      mishandling: e.target.mishandling.value,
      proper_arrangement: e.target.proper_arrangement.value,
      missing_docs: e.target.missing_docs.value,
      signed: e.target.signed.value,
      tampering: e.target.tampering.value,
      docs_contam: e.target.docs_contam.value,
      crumpled: e.target.crumpled.value,
      orig: e.target.orig.value,
      secured: e.target.secured.value,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inkData)
    }
    fetch('http://localhost:8000/qmr_ink', requestOptions)
  }

  render() {
    return (
      <form onSubmit={this.submitData}>
        <div className={styles.QMR}>
          <div className={styles.QMR_title + ' text-light pt-2 px-2'}>
            <h5><i className="text-light">Quality Monitoring Report (Non-Paper)</i></h5>
            <hr className='text-muted'></hr>
          </div>
          <div className='p-2'>
            <QMRNonPaperInfo />
            <hr></hr>
            <div>
              <span className={styles + ' text-light mx-3'}>Please choose carefully the right answer below</span>
            </div>
            <div className='p-3'>
              <QMRNonPaperInkColor />
              <QMRNonPaperLegend />
            </div>
            <QMRNonPaperInkCriteria />
          </div>
          <div className='d-flex justify-content-end p-3 mx-2'>
            <div className='mx-1'>
              <button type="submit" class="btn btn-success">Submit</button>
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

export default QMRNonPaper;
