import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CAR.module.css';
import reject_flow from './image/20121212111931_59859.jpg'

class CAR extends Component {
  classification_1 = [
    { classif_option: 'Quality', classif_name: 'ClassificationOptionName' },
    { classif_option: '5s', classif_name: 'ClassificationOptionName' }
  ];

  classification_1_array = [];

  CreateClassification1Array = () => {
    this.classification_1_array = this.classification_1.map((element) => (
      <div className={styles + ' form-check mt-3 mx-5'}>
        <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.classif_name} id='random' />
        <label class="form-check-label" for="flexRadioDefault1">
          {element.classif_option}
        </label>
      </div>
    ))
  }

  classification_2 = [
    { classif_option: 'Engineering Evaluation', classif_name: 'ClassificationOptionName' },
    { classif_option: 'Customer Preference', classif_name: 'ClassificationOptionName' }
  ];

  classification_2_array = [];

  CreateClassification2Array = () => {
    this.classification_2_array = this.classification_2.map((element) => (
      <div className={styles + ' form-check mt-3 mx-5'}>
        <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.classif_name} id='random' />
        <label class="form-check-label" for="flexRadioDefault1">
          {element.classif_option}
        </label>
      </div>
    ))
  }

  related_issues = [
    { issues: 'Machine' },
    { issues: 'Manpower' },
    { issues: 'Customer' },
    { issues: 'Others' },
  ]

  related_issues_array = [];

  CreateRelatedIssuesArray = () => {
    this.related_issues_array = this.related_issues.map((element) => (
      <div className={styles + ' d-flex'}>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            {element.issues}
          </label>
        </div>
      </div>
    ))
  }

  station_detected = [
    { stations: 'Production', name: 'StationDetectedName' },
    { stations: 'Engineering', name: 'StationDetectedName' },
    { stations: 'QA', name: 'StationDetectedName' },
    { stations: 'Logistics', name: 'StationDetectedName' },
  ]

  station_detected_array = [];

  CreateStationDetectedArray = () => {
    this.station_detected_array = this.station_detected.map((element) => (
      <div>
        <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.name} id='random' />
        <label class="form-check-label mx-2" for="flexRadioDefault1">
          {element.stations}
        </label>
      </div>
    ))
  }

  render() {
    this.CreateClassification1Array();
    this.CreateClassification2Array();
    this.CreateRelatedIssuesArray();
    this.CreateStationDetectedArray();
    return (
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
          <div class="row">
            <div class="col-4">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col-4">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <label class="input-group-text" for="inputGroupSelect01">Department</label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected="" class='d-none'>Department</option>
                  <option value="1">Production</option>
                  <option value="1">WEB</option>
                  <option value="1">Pre-Press</option>
                  <option value="1">TSQA</option>
                  <option value="1">Logistic</option>
                  <option value="1">Engineering</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Date</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <label class="input-group-text" for="inputGroupSelect01">Type</label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected="" class="d-none">Prod. Type</option>
                  <option value="1">Paper</option>
                  <option value="1">Non-Paper</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Prod.Name:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Supplier</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Reject Description:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Reject QTY:</span>
                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Doc. Number:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col-5">
              <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Dept. Head</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <hr></hr>
          <div>
            <div className={styles.CAR_classification_title + ' d-flex justify-content-center text-warning'}>
              <h6>Classification:</h6>
            </div>
            <div className={styles.CAR_classification_list + ' d-flex'}>
              <div className={styles.CAR_classification_list_1 + ' col text-light px-5'}>
                {this.classification_1_array}
              </div>
              <div className='col text-light px-5'>
                {this.classification_2_array}
              </div>
            </div>
          </div>
          <hr className='mx-2'></hr>
          <div className='p-2 border rounded border-warning d-flex'>
            <div className={styles.CAR_workflow_plan + ' col-9'}>
              <div className='text-warning d-flex justify-content-center pt-2'>
                <h5>Reject Workflow Plan</h5>
              </div>
              <div className='d-flex justify-content-center'>
                <img src={reject_flow} class="img-fluid" alt="..." />
              </div>
            </div>
            <div className={styles.CAR_related_issues + ' col pt-4 text-warning'}>
              <h5>Related</h5>
              <h5>Issues</h5>
              <div className='px-5 pt-3'>
                {this.related_issues_array}
              </div>
            </div>
          </div>
        </div>
        <hr className='mx-2'></hr>
        <div className='d-flex'>
          <div className='mx-3 col px-3 pt-2'>
            <div className={styles + ' col text-warning'}>
              <h5>Station Detected:</h5>
            </div>
            <div className={styles + ' col text-light'}>
              {this.station_detected_array}
            </div>
          </div>
          <div className={styles.CAR_problem_analysis + ' col-8 mx-4'}>

          </div>
        </div>
        <div className='p-3 pt-5 mx-3'>
          <div className='d-flex'>
            <div class="col-5">
              <div className={styles.CAR_created_by + ' input-group input-group-sm mb-3 col bg-transparent'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">Created by:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div className='col mx-3'>
              <div className={styles.CAR_created_by + ' input-group input-group-sm mb-3 col bg-transparent'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">Supervisor:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div class="col-5">
              <div className={styles.CAR_created_by + ' input-group input-group-sm mb-3 col bg-transparent'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">Position:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
            <div className={styles.CAR_final_recommendation + ' col-7 mx-3'}>
              <h6 className='text-light px-2 p-2'>Final Recommendation:</h6>
              <div className='mx-3'>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
                <hr className='mt-4'></hr>
              </div>
            </div>
            <div className={styles.CAR_approval + ' col d-flex align-items-center text-light'}>
              <h6 className='text-light px-2 p-2 mb-3'>Approved By:</h6>
              <div>
                <div className='d-flex mb-3'>
                  <span>QA Manager:  _______________________</span>
                </div>
                <div className='d-flex mb-3'>
                  <span>Prod. Manager:  ____________________</span>
                </div>
                <div className='d-flex mb-3'>
                  <span>Marketing :  _________________________</span>
                </div>
                <div className='d-flex mb-3'>
                  <span>ODM :  _____________________________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mx-2'></hr>
        <div className='d-flex justify-content-end p-3 mx-2'>
          <div className='mx-1'>
            <button type="button" class="btn btn-success">Submit</button>
          </div>
          <div className='mx-1'>
            <button type="button" class="btn btn-primary">Print</button>
          </div>
        </div>
      </div >
    )
  }
}

export default CAR;
