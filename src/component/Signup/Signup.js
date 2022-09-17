import React, { Component } from 'react';
import styles from './Signup.module.css';
import logo from './image/1525506679828.jpg'
import Loader from '../../Loader/Loader';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      hidden: true,
      password: '',
      name: '',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
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
      position: e.target.position.value,
      id_num: e.target.id_num.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(signUpData)
    }
    fetch('http://localhost:8000/users', requestOptions)
    const customId = "custom-id-yes";
    toast.success(signUpData.username + ' Successfully Added!', {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
      hideProgressBar: true,
      autoClose: 2000,
      theme: "colored"
    });
  }

  render() {
    return (
      <>
        {this.state.loader ?
          <form onSubmit={this.submitData}>
            <div className="app-container">
              <ToastContainer limit={1} transition={Flip} />
              <div className={styles.Signup + '  d-flex justify-content-center bg-success'}>
                <div className={styles.Signup_cont + ' shadow-lg p-2 mt-3 bg-light'}>
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
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="K.Catindoy" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">position</label>
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
                      <div className="mb-3">
                        <label className="form-label">ID Number:</label>
                        <input type="text" className="form-control" name="id_num" maxLength={"6"} placeholder="123456" required />
                      </div>
                      <br></br>
                      <div>
                        <div className={styles.password_input}>
                          <label className="form-label">Password</label>
                          <input type={this.state.hidden ? 'password' : 'text'}
                            defaultValue={this.state.password}
                            onChange={this.handlePasswordChange} name="password" className='form-control' required />
                          <div className={styles.password_visibility + ' d-flex justify-content-end'}>
                            <div className="mx-4 px-2 view_password">
                              <i id="visibilityBtnPassword">
                                <span className="material-symbols-outlined text-muted" onClick={this.toggleShow}>
                                  {this.state.hidden ? 'visibility' : 'visibility_off'}
                                </span>
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.Signup_cont_buttons + ' d-flex justify-content-center'}>
                      <button type="submit" className="btn btn-success p-3">Success</button>
                    </div>
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
