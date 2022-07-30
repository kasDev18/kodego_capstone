import React from 'react';
import styles from './Landing.module.css';
import LandingHeader from './LandingHeader/LandingHeader';

const Landing = () => (
  <div className={styles.Landing}>
    <LandingHeader />
  </div>
);

export default Landing;
