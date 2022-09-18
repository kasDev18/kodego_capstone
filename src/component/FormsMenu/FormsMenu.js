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
    }, 2000);
  })

  const RedirectQMRPaper = () => {
    window.location.href = "/qmr/paper"
  }
  const RedirectInk = () => {
    window.location.href = "/qmr/non_paper/ink"
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
            <div className={styles.Forms_Records + ' text-dark px-2 accordion'}>
              <div className={styles.accordion + ' accordion-item text-success'}>
                < h6 className={styles.Forms_title + '  d-flex justify-content-center text-success border rounded border-success accordion-header'} >
                  <button className="accordion-button bg-transparent border-0 px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Non-Paper
                  </button>
                </h6>
                <div id={'collapseOne'} className={styles.Forms_collapse + " accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    < p onClick={RedirectInk} className={styles + '  d-flex justify-content-center border rounded border-success text-success px-2 accordion-header'} >
                      <button className=" text-success bg-transparent border-0" >
                        Ink
                      </button>
                    </p>
                  </div>
                </div>
              </div>
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
