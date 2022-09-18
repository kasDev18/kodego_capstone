import React, { useEffect, useState } from 'react';
import styles from './LandingHeader.module.css';
import logo from './images/1525506679828.jpg';
import profile from './images/th.png';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';
import axios from 'axios';
import i18next from 'i18next'

const LandingHeader = () => {
  const [username, setUsername] = useState(localStorage.getItem('user-logged'));
  let user = JSON.parse(username)

  function logout() {
    window.location.href = '/login'
  }

  return (
    < div className={styles.LandingHeader + '  d-flex justify-content-center align-items-center'} >
      <div className={styles.LandingHeader_col_1 + ' col-7 d-flex align-items-center'}>
        <div className={styles + ' mx-2'}>
          <a href="/product-monitoring-system">
            <img src={logo} className="img-fluid border rounded-circle" alt="..." width={"40px"} height={"40px"} />
          </a>
        </div>
        <div className={styles + ' text-white mx-2 pt-2'}>
          <h6>{i18next.t('fpc_qa_pms')}</h6>
        </div>
      </div>
      <div className={styles + ' col d-flex justify-content-end align-items-center px-5'}>
        <LanguageSelector />
        <div className={styles.LandingHeader_settings + ' dropdown'}>
          <i className="fa-solid fa-user text-light"></i>
          <a className={styles.LandingHeader_settings_dropdown + ' btn btn-transparent border border-0 dropdown-toggle'} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {user.username}
          </a>

          <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
            <div className={styles.LandingHeader_profile + ' d-flex justify-content-center p-2'}>
              <img src={profile} className="img-fluid m-3 border rounded-circle" alt="..." width={"70px"} height={"70px"} />
            </div>
            <div className={styles.LandingHeader_prof_details + ' text-light'}>
              <div className={styles + ' d-flex justify-content-center'}>
                <h6>{user.username}</h6>
              </div>
              <div className={styles + ' d-flex justify-content-center'}>
                <h6>{user.position}</h6>
              </div>
            </div>
            <li className={styles + ' px-5'}><a className="dropdown-item text-warning text-center border border-warning" onClick={() => logout()}>{i18next.t('Logout')}</a></li>
          </ul>
        </div>
      </div>
    </div >
  )
};

export default LandingHeader;
