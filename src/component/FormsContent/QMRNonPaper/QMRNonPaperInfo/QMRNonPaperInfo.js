import React, { Component } from 'react';
import styles from './QMRNonPaperInfo.module.css';

class QMRNonPaperInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: []
    }
  }

  getUsername() {
    let name = JSON.parse(localStorage.getItem('user-logged'));
    this.setState({ username: name.username })
  }

  componentDidMount() {
    this.getUsername()
  }

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
    this.department_array = this.department.map((element, index) => (
      <option key={index} defaultValue={element.value}>{element.dept_name}</option>
    ))
  }

  render() {
    this.CreateDepartmentArray();
    return (
      <>
        <div className="row">
          <div className="col-4">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">name</span>
              <input type="text" defaultValue={this.state.username} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='name' required />
            </div>
          </div>
          <div className="col-4">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <label className="input-group-text" htmlFor="inputGroupSelect01">Ink Color</label>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='ink_color' required />
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
              <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='date' required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue='Ink' name='prod_type' required />
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">Prod.Name:</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='prod_name' required />
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">Supplier</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='supplier' required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
              <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='qty' required />
            </div>
          </div>
          <div className="col">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">Doc. Number:</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='doc_number' required />
            </div>
          </div>
          <div className="col-5">
            <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
              <span className="input-group-text" id="inputGroup-sizing-sm">Dept. Head</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='dept_head' required />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default QMRNonPaperInfo;
