import React, { Component } from 'react';
import styles from './SignupConfirmPasswordShowHide.module.css';

class SignupConfirmPasswordShowHide extends Component {
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
      <div class="">
        <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
        <input type={this.state.hidden ? 'password' : 'text'}
          value={this.state.password}
          onChange={this.handlePasswordChange} class="form-control" id="exampleFormControlInput1" required />
        <div className={styles.password_visibility + ' d-flex justify-content-end'}>
          <div class="mx-4 px-2 view_password">
            <i id="visibilityBtnPassword">
              <span class="material-symbols-outlined text-muted" onClick={this.toggleShow}>
                {this.state.hidden ? 'visibility' : 'visibility_off'}
              </span>
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupConfirmPasswordShowHide;
