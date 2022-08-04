import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormsContent.module.css';
import QMR from './QMR/QMR';
import QMRNonPaper from './QMRNonPaper/QMRNonPaper';
import CAR from './CAR/CAR';

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
        {this.state.display ? <QMRNonPaper /> : this.state.display}
        <CAR />
      </div >
    )
  }
}

export default FormsContent;
