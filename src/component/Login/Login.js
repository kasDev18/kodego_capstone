import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import logo from './images/1525506679828.jpg'
import PasswordShowHide from './PasswordShowHide/PasswordShowHide';
import axios from 'axios';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  RedirectSignup = () => {
    window.location = '/signup';
  }

  RedirectLanding = () => {
    // window.location = 'https://fpc-qa.netlify.app/product-monitoring-system';
    // localStorage.setItem('user-logged', true)
    window.location = '/product-monitoring-system';
  }

  navigateSignup = () => {
    window.location.href = '/signup'
  }

  RedirectLogin = () => {
    localStorage.clear();
  }
  componentDidMount = () => {
    this.RedirectLogin();
  }

  handleSubmit = e => {
    e.preventDefault();
    let credentials = {
      username: e.target.username.value,
      password: e.target.password.value,
      position: e.target.position.value,
    }

    let credentialsCopy = {
      username: e.target.username.value,
      position: e.target.position.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(credentials)
    }
    fetch('http://localhost:8000/login', requestOptions)
      .then(result => result)
      .then(response => {
        if (response.status !== 200) {
          Store.addNotification({
            title: "Invalid Credentials!",
            // message: 'invalid input verified!',
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
            }
          });
          console.log("Invalid Credentials!")
        }
        if (response.status == 200) {
          localStorage.setItem('user-logged', JSON.stringify({ "username": e.target.username.value, "position": e.target.position.value }));
          if (credentials.position === 'Admin' && credentials.username === 'admin') {
            this.navigateSignup();
          } else if (credentials.position === 'QA Analyst') {
            window.location.href = '/product-monitoring-system'
          } else {
            this.RedirectLanding();
          }
        }
      })


    // axios.post('http://localhost:8000/api/login', credentials)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="app-container">
          <div className={styles.Login_body}>
            <div className={styles.Login_cont + ' d-flex align-items-center justify-content-center'}>
              <div className="d-flex">
                <div className={styles.Login_first_col + ' col-7 p-3'}>
                  <div className={styles + ' d-flex justify-content-center'}>
                    <img src={logo} className="img-fluid" alt="..." width={"300px"} height={"300px"} />
                  </div>
                  <div className={styles + ' d-flex justify-content-center mb-3'}>
                    <h3 className={styles.Login_company_name}>Fortune Packaging Corporation</h3>
                  </div>
                  <div className={styles.Login_Dept}>
                    <div className={styles + ' d-flex justify-content-center mb-1'}>
                      <h5 className={styles + ' d-block'}>Technical Services and Quality</h5>
                    </div>
                    <div className={styles + ' d-flex justify-content-center'}>
                      <h5 className={styles + ' d-block'}>Assurance Department</h5>
                    </div>
                  </div>
                </div>
                <div className={styles + ' col p-5'}>
                  <div className={styles.Login_card + ' card shadow border border-0'}>
                    <div className="card-body">
                      <h5 className="card-title mb-5">Login Form</h5>
                      <ReactNotifications className={styles.reactNotif} />
                      <div className={styles.Login_form + ' mt-5'}>
                        <div className="mb-3 mt-5">
                          <label className="form-label text-muted">Username</label>
                          <input type="text" className="form-control" name='username' placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-muted">position</label>
                          <select className="form-control form-select" name="position" placeholder="Supervisor" required>
                            <option defaultValue className='d-none'></option>
                            <option defaultValue="Admin">Admin</option>
                            <option defaultValue="Supervisor">Supervisor</option>
                            <option defaultValue="Assistant Supervisor">Assistant Supervisor</option>
                            <option defaultValue="Calibration Officer">Calibration Officer</option>
                            <option defaultValue="QA Analyst">QA Analyst</option>
                            <option defaultValue="TS Engineer">TS Engineer</option>
                            <option defaultValue="QA Inspector">QA Inspector</option>
                          </select>
                        </div>
                        <PasswordShowHide />
                      </div>
                      <div className={styles.Login_submit_btn}>
                        <button type="submit" className="btn btn-outline-success col-12">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
      </form >
    )
  }
}


export default Login;
