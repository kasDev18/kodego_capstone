import React, { Component } from 'react';
import FormsContent from '../FormsContent/FormsContent';
import Position from '../Position/Position';
import styles from './Landing.module.css';
import LandingHeader from './LandingHeader/LandingHeader';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden_qmr_paper: true,
      hidden_qmr_non_paper: true,
    };

    this.ChangeQMRPaperBackground = this.ChangeQMRPaperBackground.bind(this);
    this.ChangeQMRNonPaperBackground = this.ChangeQMRNonPaperBackground.bind(this);
  }

  ChangeQMRPaperBackground() {
    this.setState({ hidden_qmr_paper: !this.state.hidden_qmr_paper });
    // this.setState({ hidden_qmr_non_paper: !this.state.hidden_qmr_non_paper });
  }

  ChangeQMRNonPaperBackground() {
    this.setState({ hidden_qmr_non_paper: !this.state.hidden_qmr_non_paper });
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
                backgroundColor: this.state.hidden_qmr_paper ? 'transparent' : 'green'
              }}>
                < h6 className={styles.random + ' pt-1 d-flex justify-content-end'} onClick={this.ChangeQMRPaperBackground} style={{
                  color: this.state.hidden_qmr_paper ? '#000' : '#fff'
                }}
                >QMR(Paper)</h6>
              </div>
              <div className={styles.Forms_Records + ' text-dark p-2'} style={{
                backgroundColor: this.state.hidden_qmr_non_paper ? 'transparent' : 'green'
              }}>
                < h6 className={styles.random + ' pt-1 d-flex justify-content-end'} onClick={this.ChangeQMRNonPaperBackground} style={{
                  color: this.state.hidden_qmr_non_paper ? '#000' : '#fff'
                }}
                >QMR(Non-Paper)</h6>
              </div>
              <div className={styles.Forms_Records + ' text-dark p-2'}>
                <h6 className={styles.random + ' pt-1 d-flex justify-content-end'}>CAR</h6>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Landing;
