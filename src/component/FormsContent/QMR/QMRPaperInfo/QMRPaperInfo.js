import React, { Component } from 'react';
import styles from './QMRPaperInfo.module.css';
import axios from 'axios';
import i18next from 'i18next'

class QMRPaperInfo extends Component {
  department = [
    { dept_name: 'Production', value: 'Production' },
    { dept_name: 'WEB', value: 'WEB' },
    { dept_name: 'Pre-Press', value: 'Pre-Press' },
    { dept_name: 'TSQA', value: 'TSQA' },
    { dept_name: 'Logistic', value: 'Logistic' },
    { dept_name: 'Engineering', value: 'Engineering' },
  ]

  department_array = [];

  CreateDepartmentArray() {
    this.department_array = this.department.map((element) => (
      <option value={i18next.t(element.value)}>{i18next.t(element.dept_name)}</option>
    ))
  }

  render() {
    this.CreateDepartmentArray();
    return (
      <>
        <div className="row">
          <div className="col-4">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">{i18next.t("name")}</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='name' />
            </div>
          </div>
          <div className="col-4">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <label className="input-group-text" for="inputGroupSelect01">{i18next.t("Department")}</label>
              <select className="form-select" id="inputGroupSelect01" name='dept_name'>
                <option selected className='d-none'>{i18next.t("Department")}</option>
                {this.department_array}
              </select>
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">{i18next.t("Date")}</span>
              <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='date' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <label className="input-group-text" for="inputGroupSelect01">{i18next.t("Type")}</label>
              <select className="form-select" id="inputGroupSelect01" name='prod_type'>
                <option selected="" className="d-none">{i18next.t("Type")}</option>
                <option value="Rolls">{i18next.t("Rolls")}</option>
                <option value="Sheets">{i18next.t("Sheets")}</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">{i18next.t("ProdName")}</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='prod_name' />
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">{i18next.t("Supplier")}</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='supplier' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">{i18next.t("Quantity")}</span>
              <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='qty' />
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">{i18next.t("Doc. Number:")}</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='doc_number' />
            </div>
          </div>
          <div className="col-5">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">{i18next.t("Dept. Head")}</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='dept_head' />
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default QMRPaperInfo;
