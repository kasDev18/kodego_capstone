import React, { Component } from 'react';
import Forms from '../Forms/Forms';
import FormsContent from '../FormsContent/FormsContent';
import Position from '../Position/Position';
import styles from './Landing.module.css';
import LandingHeader from './LandingHeader/LandingHeader';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };

    this.ChangeBackground = this.ChangeBackground.bind(this);
  }

  ChangeBackground() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div className={styles.Landing}>
        <LandingHeader />
        <div className={styles.content + ' d-flex p-3 px-5'}>
          <Position />
          <FormsContent />
          <div className={styles.Forms_cont + ' border rounded col-2 mx-1'}>
            <div className={styles.Forms_Records_content + ' p-3'}>
              <div className={styles + ' d-flex justify-content-center text-success p-3'}>
                <h5 className="text-uppercase fw-bolder text-decoration-underline">Forms/Records</h5>
              </div>
              <div className={styles.Forms_Records + ' text-dark p-2'} style={{
                backgroundColor: this.state.hidden ? 'transparent' : 'green'
              }}>
                < h6 className={styles.random + ' pt-1 d-flex justify-content-end'} onClick={this.ChangeBackground} style={{
                  color: this.state.hidden ? '#000' : '#fff'
                }}
                >QMR(Paper)</h6>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Landing;
