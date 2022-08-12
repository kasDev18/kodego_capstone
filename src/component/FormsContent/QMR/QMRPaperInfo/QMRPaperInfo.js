import React, { Component } from 'react';
import styles from './QMRPaperInfo.module.css';

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
      <option value={element.value}>{element.dept_name}</option>
    ))
  }

  render() {
    this.CreateDepartmentArray();
    return (
      <>
        <div class="row">
          <div class="col-4">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">name</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='name' />
            </div>
          </div>
          <div class="col-4">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <label class="input-group-text" for="inputGroupSelect01">Department</label>
              <select class="form-select" id="inputGroupSelect01" name='dept_name'>
                <option selected="" class='d-none'>Department</option>
                {this.department_array}
              </select>
            </div>
          </div>
          <div class="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span class="input-group-text" id="inputGroup-sizing-sm">Date</span>
              <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='date' />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <label class="input-group-text" for="inputGroupSelect01">Type</label>
              <select class="form-select" id="inputGroupSelect01" name='prod_type'>
                <option selected="" class="d-none">Type</option>
                <option value="1">Rolls</option>
                <option value="1">Sheets</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span class="input-group-text" id="inputGroup-sizing-sm">Prod.Name:</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='prod_name' />
            </div>
          </div>
          <div class="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span class="input-group-text" id="inputGroup-sizing-sm">Supplier</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='supplier' />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
              <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='qty' />
            </div>
          </div>
          <div class="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span class="input-group-text" id="inputGroup-sizing-sm">Doc. Number:</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='doc_number' />
            </div>
          </div>
          <div class="col-5">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span class="input-group-text" id="inputGroup-sizing-sm">Dept. Head</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='dept_head' />
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default QMRPaperInfo;
