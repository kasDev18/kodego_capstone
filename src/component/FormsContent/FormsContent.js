import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormsContent.module.css';
import QMR from './QMR/QMR';

const FormsContent = () => (
  <div className={styles.FormsContent + '  col-8 container p-2'}>
    <QMR />
  </div >
);


export default FormsContent;
