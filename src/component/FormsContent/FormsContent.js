import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormsContent.module.css';
import QMR from './QMR/QMR';

class FormsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }
  render() {
    return (
      <div className={styles.FormsContent + '  col-8 container p-2'}>
        {this.state.display ? <QMR /> : this.state.display}
      </div >
    )
  }
}

export default FormsContent;
