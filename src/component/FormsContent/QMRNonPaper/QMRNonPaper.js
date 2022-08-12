import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './QMRNonPaper.module.css';
import QMRNonPaperInfo from './QMRNonPaperInfo/QMRNonPaperInfo';
import QMRNonPaperInkColor from './QMRNonPaperInkColor/QMRNonPaperInkColor';
import QMRNonPaperLegend from './QMRNonPaperLegend/QMRNonPaperLegend';
import QMRNonPaperInkCriteria from './QMRNonPaperInkCriteria/QMRNonPaperInkCriteria';

class QMRNonPaper extends Component {

  render() {
    return (
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
            <button type="button" class="btn btn-success">Submit</button>
          </div>
          <div className='mx-1'>
            <button type="button" class="btn btn-primary">Print</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QMRNonPaper;
