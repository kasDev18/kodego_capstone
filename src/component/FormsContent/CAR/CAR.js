import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CAR.module.css';
import Loader from '../../../Loader/Loader';
import CARInfo from './CARInfo/CARInfo';
import CARClassification from './CARClassification/CARClassification';
import CARWorkflowPlan from './CARWorkflowPlan/CARWorkflowPlan';
import CARAuthorization from './CARAuthorization/CARAuthorization';

class CAR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      data: false,
    }
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
    )
  }
}

export default CAR;
