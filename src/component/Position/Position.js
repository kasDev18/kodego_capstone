import React, { Component } from 'react';
import styles from './Position.module.css';
import axios from 'axios';
import i18next from 'i18next'

class Position extends Component {

  render() {
    return (
      <div className={styles.Position + ' border rounded col-2 mx-1'}>
        <div className={styles.Position_content + ' p-3'}>
          <div className={styles + ' d-flex justify-content-center text-success p-3'}>
            <h5 className="text-uppercase fw-bolder text-decoration-underline">Position</h5>
          </div>
          <div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('Supervisor')}</h6>
            </div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('Assistant Supervisor')}</h6>
            </div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('Calibration Officer')}</h6>
            </div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('QA Analyst')}</h6>
            </div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('Technical Engineer')}</h6>
            </div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('Ink and Chemical Clerk')}</h6>
            </div>
            <div className={styles.Position_designation + ' text-dark p-2'}>
              <h6 className={styles + ' pt-1'}>{i18next.t('Inspector')}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Position;
