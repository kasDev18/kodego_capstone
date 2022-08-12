import React, { Component } from 'react';
import styles from './Position.module.css';

class Position extends Component {
  position = [
    { position: "Supervisor" },
    { position: "Assistant Supervisor" },
    { position: "Calibration Officer" },
    { position: "QA Analyst" },
    { position: "Technical Engineer" },
    { position: "Ink and Chemical Clerk" },
    { position: "Inspector" }
  ];
  position_array = {};

  CreatePositionArray() {
    this.position_array = this.position.map((element) => (
      <div className={styles.Position_designation + ' text-dark p-2'}>
        <h6 className={styles + ' pt-1'}>{element.position}</h6>
      </div>
    ))
  }

  render() {
    this.CreatePositionArray();
    return (
      <div className={styles.Position + ' border rounded col-2 mx-1'}>
        <div className={styles.Position_content + ' p-3'}>
          <div className={styles + ' d-flex justify-content-center text-success p-3'}>
            <h5 className="text-uppercase fw-bolder text-decoration-underline">Position</h5>
          </div>
          <div>
            {this.position_array}
          </div>
        </div>
      </div>
    )
  }
}



export default Position;
