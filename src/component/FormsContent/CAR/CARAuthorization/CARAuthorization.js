import React, { Component } from 'react';
import styles from './CARAuthorization.module.css';

class CARAuthorization extends Component {
  station_detected = [
    { stations: 'Production', name: 'station_detected', value: 'Production' },
    { stations: 'Engineering', name: 'station_detected', value: 'Engineering' },
    { stations: 'QA', name: 'station_detected', value: 'QA' },
    { stations: 'Logistics', name: 'station_detected', value: 'Logistics' },
  ]

  station_detected_array = [];

  CreateStationDetectedArray = () => {
    this.station_detected_array = this.station_detected.map((element, index) => (
      <div key={index}>
        <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.name} id='random' value={element.value} required />
        <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">
          {element.stations}
        </label>
      </div>
    ))
  }

  render() {
    this.CreateStationDetectedArray();
    return (
      <>
        <div className='d-flex'>
          <div className='mx-3 col px-3 pt-2'>
            <div className={styles + ' col text-warning'}>
              <h5>Station Detected:</h5>
            </div>
            <div className={styles + ' col text-light'}>
              {this.station_detected_array}
            </div>
          </div>
          <div className={styles.CAR_problem_analysis + ' col-8 mx-4 p-3'}>
            <div className={styles + ' col text-warning d-flex justify-content-center'}>
              <h5>Problem/Analysis:</h5>
            </div>
            <textarea className='mx-4'></textarea>
          </div>
        </div>
        <div className='p-3 pt-5 mx-3'>
          <div className='d-flex'>
            <div className="col-5">
              <div className={styles.CAR_created_by + ' input-group input-group-sm mb-3 col bg-transparent'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">Created by:</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='created_by' required />
              </div>
            </div>
            <div className='col mx-3'>
              <div className={styles.CAR_created_by + ' input-group input-group-sm mb-3 col bg-transparent'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">Supervisor:</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='supervisor' required />
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div className="col-5">
              <div className={styles.CAR_created_by + ' input-group input-group-sm mb-3 col bg-transparent'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">Position:</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='position' required />
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
      </>
    )
  }
}

export default CARAuthorization;
