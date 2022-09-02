import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import logo from './images/1525506679828.jpg'
import PasswordShowHide from './PasswordShowHide/PasswordShowHide';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  RedirectSignup = () => {
    window.location = '/signup';
  }

  RedirectLanding = () => {
    // window.location = 'https://fpc-qa.netlify.app/product-monitoring-system';
    localStorage.setItem('user-logged', true)
    window.location = '/product-monitoring-system';
  }

  navigateSignup = () => {
    window.location.href = '/signup'
  }

  handleSubmit = e => {
    e.preventDefault();


    const credentials = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(credentials)
    }
    fetch('http://localhost:8000/api/login', requestOptions)
      .then(result => result)
      .then(response => {
        if (response.status !== 200) {
          console.log("Invalid Credentials!")
        }
        if (response.status == 200) {
          localStorage.setItem('user-logged', credentials.username);
          if (credentials.username === 'admin') {
            this.navigateSignup();
          } else {
            window.location.href = '/product-monitoring-system'
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
        <div className={styles.Login_body}>
          <div className={styles.Login_cont + ' d-flex align-items-center justify-content-center'}>
            <div className="d-flex">
              <div className={styles.Login_first_col + ' col-7 p-3'}>
                <div className={styles + ' d-flex justify-content-center'}>
                  <img src={logo} class="img-fluid" alt="..." width={"300px"} height={"300px"} />
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
                  <div class="card-body">
                    <h5 class="card-title">Login Form</h5>
                    <div className={styles.Login_form}>
                      <div class="mb-3">
                        <label class="form-label text-muted">Username</label>
                        <input type="text" class="form-control" name='username' placeholder="name@example.com" />
                      </div>
                      <PasswordShowHide />
                    </div>
                    <div className={styles.Login_submit_btn}>
                      <button type="submit" class="btn btn-outline-success col-12">Submit</button>
                    </div>
                    <div className={styles.Login_forgot_password + ' d-flex justify-content-center mt-2'}>
                      <h6>Forgot Password? click <a href="#" onClick={this.RedirectSignup} class="card-link">HERE</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </form >
    )
  }
}


export default Login;
