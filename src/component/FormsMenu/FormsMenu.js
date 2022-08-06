import React, { Component, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import FormsContent from '../FormsContent/FormsContent';
import LandingHeader from '../Landing/LandingHeader/LandingHeader';
import Position from '../Position/Position';
import styles from './FormsMenu.module.css';

// getData = () => {
//   setTimeout(() => {
//     fetch('')
//       .then(result => result)
//       .then((response) => {
//         this.setState({ loader: true });
//       })
//   }, 1500);
// }
// getData();

const FormsMenu = ({ children }) => {
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

  const menuItem = [
    {
      path: "/qmr/paper",
      name: "QMR(Paper)",
      icon: ""
    },
    {
      path: "/qmr/non_paper",
      name: "QMR(Non-Paper)",
      icon: ""
    },
    {
      path: "/car",
      name: "CAR",
      icon: ""
    }
  ]


  return (
    (
      !data ? <div className={styles.Landing}>
        <LandingHeader />
        <div className={styles.content + ' d-flex p-3 px-5'}>
          <Position />
          <div className={styles.FormsContent + '  col-8 container p-2'}>
            {children}
          </div>
          <div className={styles.Forms_cont + ' border rounded col-2 mx-1 p-3'}>
            <div className={styles + ' d-flex justify-content-center text-success p-3'}>
              <h5 className="text-uppercase fw-bolder text-decoration-underline">Forms/Records</h5>
            </div>
            {
              menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} activeclassName="active" className={styles.Forms_Records + ' text-dark p-2 text-decoration-none'}>
                  < h6 className={styles.Forms_title + ' pt-2 d-flex justify-content-center border rounded border-success text-success p-3'}>{item.name}</h6>
                </NavLink>
              ))
            }
          </div>
        </div>
      </div > : <Loader />
    )
  )
}

export default FormsMenu;
