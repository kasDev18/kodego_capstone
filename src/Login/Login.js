import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import logo from './images/1525506679828.jpg'
import PasswordShowHide from './PasswordShowHide/PasswordShowHide';

const RedirectForgotPassword = () => {
  window.location = '';
}

const Login = () => (
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
                  <label for="exampleFormControlInput1" class="form-label text-muted">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <PasswordShowHide />
              </div>
              <div className={styles.Login_submit_btn}>
                <button type="button" class="btn btn-outline-success col-12">Success</button>
              </div>
              <div className={styles.Login_forgot_password + ' d-flex justify-content-center mt-2'}>
                <h6>Forgot Password? click <a href="#" class="card-link">HERE</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default Login;
