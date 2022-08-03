import React from 'react';
import Forms from '../Forms/Forms';
import FormsContent from '../FormsContent/FormsContent';
import Position from '../Position/Position';
import styles from './Landing.module.css';
import LandingHeader from './LandingHeader/LandingHeader';

const Landing = () => (
  <div className={styles.Landing}>
    <LandingHeader />
    <div className={styles.content + ' d-flex p-3 px-5'}>
      <Position />
      <FormsContent />
      <Forms />
    </div>
  </div>
);

export default Landing;
