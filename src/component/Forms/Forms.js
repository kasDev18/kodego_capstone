import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Forms.module.css';
import { render } from '@testing-library/react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };

    // this.ChangeBackground = this.ChangeBackground.bind(this);
  }

  // forms = [
  //   { forms: "QMR(Paper)" },
  //   { forms: "QMR(Non-Paper)" },
  //   { forms: "CAR" },
  //   { forms: "Labels" }
  // ];
  // forms_array = {};

  // ChangeBackground() {
  //   this.setState({ hidden: !this.state.hidden });
  // }

  // CreatePositionArray() {
  //   this.forms_array = this.forms.map((element) => (
  //     <div className={styles.Forms_Records + ' text-dark p-2'}>
  //       <h6 className={styles.random + ' pt-1 d-flex justify-content-end'} onClick={this.ChangeBackground} style={{
  //         backgroundColor: this.state.hidden ? 'green' : 'transparent',
  //         color: this.state.hidden ? '#fff' : '#000'
  //       }} >{element.forms}</h6>
  //     </div>
  //   ))
  // }

  render() {
    return (
      <div className={styles.Forms_cont + ' border rounded col-2 mx-1'}>
        <div className={styles.Forms_Records_content + ' p-3'}>
          <div className={styles + ' d-flex justify-content-center text-success p-3'}>
            <h5 className="text-uppercase fw-bolder text-decoration-underline">Forms/Records</h5>
          </div>
          <div className={styles.Forms_Records + ' text-dark p-2'}>
            <h6 className={styles.random + ' pt-1 d-flex justify-content-end'}
            // onClick={this.ChangeBackground} style={{
            //   backgroundColor: this.state.hidden ? 'green' : 'transparent',
            //   color: this.state.hidden ? '#fff' : '#000'
            // }} 
            >QMR(Paper)</h6>
          </div>
        </div>
      </div>
    )
  }
}
export default Forms;
