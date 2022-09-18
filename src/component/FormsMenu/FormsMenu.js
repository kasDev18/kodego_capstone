import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import LandingHeader from '../Landing/LandingHeader/LandingHeader';
import Position from '../Position/Position';
import styles from './FormsMenu.module.css';
import axios from 'axios';
import i18next from 'i18next'


const FormsMenu = () => {
  const [data, setData] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("")
        .then(result => result)
        .then((data) => {
          setData(!data)
        })
    }, 1500);
  })

  const RedirectQMRPaper = () => {
    window.location.href = "/qmr/paper"
  }
  const RedirectQMRInk = () => {
    window.location.href = "/qmr/non_paper"
  }
  const RedirectCAR = () => {
    window.location.href = "/car"
  }


  return (
    (
      !data ? <div className={styles.Landing}>
        <LandingHeader />
        <div className={styles.content + ' d-flex p-3 px-5'}>
          <Position />
          <div className={styles.FormsContent + '  col-8 container p-2'}>
          </div>
          <div className={styles.Forms_cont + ' border rounded col-2 mx-1 p-3'}>
            <div className={styles + ' d-flex justify-content-center text-success p-3'}>
              <h5 className="text-uppercase fw-bolder text-decoration-underline">Forms/Records</h5>
            </div>
            <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
              < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'} onClick={RedirectQMRPaper}>QMR(Paper)</h6>
            </div>
            <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
              < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'} onClick={RedirectQMRInk}>QMR(Non-Paper)</h6>
            </div>
            <div className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
              < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'} onClick={RedirectCAR}>CAR</h6>
            </div>
          </div>
        </div>
      </div > : <Loader />
    )
  )
}

export default FormsMenu;
