import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PasswordShowHide.module.css';

class PasswordShowHide extends Component {
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
      <div class="mb-5">
        <label for="exampleFormControlInput1" class="form-label text-muted">Password</label>
        <input type={this.state.hidden ? 'password' : 'text'}
          value={this.state.password}
          onChange={this.handlePasswordChange} class="form-control" id="exampleFormControlInput1" />
        <div className={styles.password_visibility + ' d-flex justify-content-end'}>
          <div class="mx-2 view_password">
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

export default PasswordShowHide;
