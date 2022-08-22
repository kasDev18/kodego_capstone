import React, { Component } from 'react';
import styles from './Signup.module.css';
import logo from './image/1525506679828.jpg'
import SignupConfirmPasswordShowHide from './SignupConfirmPasswordShowHide/SignupConfirmPasswordShowHide';
import SignupPasswordShowHide from './SignupPasswordShowHide/SignupPasswordShowHide';
import Loader from '../../Loader/Loader';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
    this.getData();
  }

  getData = () => {
    setTimeout(() => {
      fetch('')
        .then(result => result)
        .then((response) => {
          this.setState({ loader: true });
        })
    }, 1500);
  }



  submitData(e) {
    e.preventDefault();
    let signUpData = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(signUpData)
    }
    fetch('http://localhost:8000/users', requestOptions)
    if (window.confirm(signUpData.username + " Successfully Added!")) {
      window.location.reload();
    };
  }

  render() {
    return (
      <>
        {this.state.loader ?
          <form onSubmit={this.submitData}>
            <div className={styles.Signup + '  d-flex justify-content-center bg-success'}>
              <div className={styles.Signup_cont + ' shadow-lg p-2 mt-5 bg-light'}>
                <div className={styles.Signup_cont_fpc + ' d-flex align-items-center'}>
                  <img src={logo} width={"70px"} height={"70px"} />
                  <h6 className='pt-2 mx-1'>Fortune PAckaging Corporation</h6>
                </div>
                <div className='mx-2'>
                  <div>
                    <div className={styles.Signup_cont_signup + ' text-success'}>
                      <h1>QA Signup Form</h1>
                    </div>
                    <div>
                      <h6>Please fill in this form to create an account.</h6>
                    </div>
                  </div>
                  <div className={styles.Signup_cont_inputs + ' mt-3'}>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Username</label>
                      <input type="text" className="form-control" name="username" id="exampleFormControlInput1" placeholder="K.Catindoy" required />
                    </div>
                    <br></br>
                    <div>
                      <SignupPasswordShowHide />
                      {/* <SignupConfirmPasswordShowHide /> */}
                    </div>
                  </div>
                  <div className={styles.Signup_cont_buttons + ' d-flex justify-content-center mt-4'}>
                    <button type="button" className="btn btn-secondary p-3">Secondary</button>
                    <button type="submit" className="btn btn-success p-3">Success</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          : <Loader />}
      </>
    )
  }
}


export default Signup;
