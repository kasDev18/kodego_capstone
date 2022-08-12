import React, { Component } from 'react';
import styles from './CARClassification.module.css';

class CARClassification extends Component {
  classification_1 = [
    { classif_option: 'Quality', classif_name: 'classification', value: 'Quality' },
    { classif_option: '5s', classif_name: 'classification', value: '5s' }
  ]

  classification_1_array = [];

  CreateClassification1Array = () => {
    this.classification_1_array = this.classification_1.map((element) => (
      <div className={styles + ' form-check mt-3 mx-5'}>
        <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.classif_name} id='random' value={element.value} />
        <label class="form-check-label" for="flexRadioDefault1">
          {element.classif_option}
        </label>
      </div>
    ))
  }

  classification_2 = [
    { classif_option: 'Engineering Evaluation', classif_name: 'classification', value: 'Engineering Evaluation' },
    { classif_option: 'Customer Preference', classif_name: 'classification', value: 'Customer Preference' }
  ];

  classification_2_array = [];

  CreateClassification2Array = () => {
    this.classification_2_array = this.classification_2.map((element) => (
      <div className={styles + ' form-check mt-3 mx-5'}>
        <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.classif_name} id='random' value={element.value} />
        <label class="form-check-label" for="flexRadioDefault1">
          {element.classif_option}
        </label>
      </div>
    ))
  }

  render() {
    this.CreateClassification1Array();
    this.CreateClassification2Array();
    return (
      <div>
        <div className={styles.CAR_classification_title + ' d-flex justify-content-center text-warning'}>
          <h6>Classification:</h6>
        </div>
        <div className={styles.CAR_classification_list + ' d-flex'}>
          <div className={styles.CAR_classification_list_1 + ' col text-light px-5'}>
            {this.classification_1_array}
          </div>
          <div className='col text-light px-5'>
            {this.classification_2_array}
          </div>
        </div>
      </div>
    );
  }
}


export default CARClassification;
