import React from 'react';
import styles from './QMRNonPaperLegend.module.css';

const QMRNonPaperLegend = () => (
  <div className={styles.QMR_legend + '  d-flex align-items-center'}>
    <div className={styles + ' d-flex p-3'}>
      <div className={styles + ' pt-1'}>
        <h6 className='text-info'>Legend</h6>
      </div>
      <div className='d-flex mx-2'>
        <div className={styles.QMR_legend_criteria + ' mx-2'}>
          <div class="form-check">
            <input class="form-check-input border rounded-circle bg-success" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label text-light" for="flexRadioDefault1">
              Accept-No Evidence of Discrepancy/Passed in Criteria
            </label>
          </div>
        </div>
        <div className={styles.QMR_legend_criteria + ' mx-2'}>
          <div class="form-check">
            <input class="form-check-input border rounded-circle bg-danger" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label text-light" for="flexRadioDefault1">
              Reject-Failed in Criteria
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QMRNonPaperLegend;
