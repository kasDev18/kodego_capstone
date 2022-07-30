import React from 'react';
import Position from '../Position/Position';
import styles from './Landing.module.css';
import LandingHeader from './LandingHeader/LandingHeader';

const Landing = () => (
  <div className={styles.Landing}>
    <LandingHeader />
    <div className={styles.content + ' d-flex p-3 px-5'}>
      <div className={styles.Position + ' border rounded col-2 mx-1'}>
        <Position />
      </div>
      <div className={styles.Position + ' border rounded col-8 '}>
        <Position />
      </div>
      <div className={styles.Position + ' border rounded col-2 mx-1'}>
        <Position />
      </div>
    </div>
  </div>
);

export default Landing;
