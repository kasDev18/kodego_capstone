import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.Loader + ' d-flex align-items-center justify-content-center'}>
    <div>
      <i class="fa-solid fa-spinner fa-spin text-success"></i>
    </div>
  </div>
);


export default Loader;
