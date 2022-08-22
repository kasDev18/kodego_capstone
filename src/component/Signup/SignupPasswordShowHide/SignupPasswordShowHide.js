import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SignupPasswordShowHide.module.css';

class SignupPasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: '',
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
  }

  render() {
    return (
      <div className={styles.password_input}>
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type={this.state.hidden ? 'password' : 'text'}
          defaultValue={this.state.password}
          onChange={this.handlePasswordChange} name="password" className='form-control' id="exampleFormControlInput1" required />
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
    );
  }
}

export default SignupPasswordShowHide;
