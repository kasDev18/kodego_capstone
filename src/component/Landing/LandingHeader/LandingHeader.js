import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingHeader.module.css';
import logo from './images/1525506679828.jpg';
import profile from './images/th.png';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';
import axios from 'axios';
import i18next from 'i18next'

const LandingHeader = () => (
  <div className={styles.LandingHeader + '  d-flex justify-content-center align-items-center'}>
    <div className={styles.LandingHeader_col_1 + ' col-7 d-flex align-items-center'}>
      <div className={styles + ' mx-2'}>
        <img src={logo} class="img-fluid border rounded-circle" alt="..." width={"40px"} height={"40px"} />
      </div>
      <div className={styles + ' text-white mx-2'}>
        <h6>{i18next.t('fpc_qa_pms')}</h6>
      </div>
    </div>
    <div className={styles + ' col d-flex justify-content-end align-items-center px-5'}>
      <LanguageSelector />
      <div className={styles.LandingHeader_settings + ' dropdown'}>
        <a className={styles.LandingHeader_settings_dropdown + ' btn btn-transparent border border-0 dropdown-toggle'} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Settings
        </a>

        <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
          <div className={styles.LandingHeader_profile + ' d-flex justify-content-center'}>
            <img src={profile} class="img-fluid m-3" alt="..." />
          </div>
          <div className={styles.LandingHeader_prof_details + ' m-2'}>
            <div className={styles + ' d-flex justify-content-center'}>
              <h6>ID: #123456</h6>
            </div>
            <div className={styles + ' d-flex justify-content-center'}>
              <h6>USERNAME</h6>
            </div>
          </div>
          <li className={styles + ' px-5'}><a class="dropdown-item text-center border border-success" href="#">Logout  </a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default LandingHeader;
