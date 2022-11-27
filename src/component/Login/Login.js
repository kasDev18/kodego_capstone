import React, { Component } from 'react';
import '../Login/Login.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './Logo';
import LoginForm from './LoginForm';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrong_credentials: false,
    }
  }

  RedirectSignup = () => {
    window.location = '/signup';
  }

  RedirectLanding = () => {
    window.location = '/product-monitoring-system';
  }

  navigateSignup = () => {
    window.location.href = '/signup'
  }

  RedirectLogin = () => {
    localStorage.clear();
  }

  errorNotif = () => {
    const customId = "custom-id-yes";
    const notify = () => toast.error("Invalid Credentials!", {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
      hideProgressBar: true,
      autoClose: 1000,
      theme: "colored",
    });

    return notify;
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(credentials)
    }
    fetch('http://localhost:8000/login', requestOptions)
      .then(result => result)
      .then(response => {
        if (response.status !== 200) {
          this.setState({ wrong_credentials: true })
          setTimeout(() => {
            window.location.reload();
          }, 2000)
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

  }

  render() {
    return (
      <div className="d-flex px-lg-5 justify-content-center Login_cont align-items-center ">
        <div className='col col-7 d-flex justify-content-end flex-column pb-5'>
          <Logo />
        </div>
        <div className='col-3'>
          <form onSubmit={this.handleSubmit} className="Login_card card shadow border border-0 pt-5">
            {
              this.state.wrong_credentials ? <ToastContainer limit={1} transition={Flip} className="toast" /> : ''
            }

            <div className="card-body">
              <LoginForm />
              <div className="Login_submit_btn mb-5">
                <button type="submit" className="btn btn-outline-success col-12" onClick={this.errorNotif()}>Submit</button>
              </div>
            </div>
          </form >
        </div>
      </div >
    )
  }
}


export default Login;
