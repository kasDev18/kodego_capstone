import React from 'react';
import { useState } from 'react';
import styles from './CARInfo.module.css';

const CARInfo = () => {

  const [username, setUsername] = useState(localStorage.getItem('user-logged'));
  let user = JSON.parse(username);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">name</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="name"
              defaultValue={user.username} required />
          </div>
        </div>
        <div className="col-4">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
            <select className="form-select" id="inputGroupSelect01" name='department' required>
              <option defaultValue className='d-none'>Department</option>
              <option defaultValue="Production">Production</option>
              <option defaultValue="WEB">WEB</option>
              <option defaultValue="Pre-Press">Pre-Press</option>
              <option defaultValue="TSQA">TSQA</option>
              <option defaultValue="Logistic">Logistic</option>
              <option defaultValue="Engineering">Engineering</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
            <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='date' required />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
            <select className="form-select" id="inputGroupSelect01" name='product_type' required>
              <option defaultValue className="d-none">Prod. Type</option>
              <option defaultValue="Paper">Paper</option>
              <option defaultValue="Non-Paper">Non-Paper</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Prod.Name:</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='product_name' required />
          </div>
        </div>
        <div className="col">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Supplier</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='supplier' required />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Reject Description:</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='reject_desc' required />
          </div>
        </div>
        <div className="col">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Reject QTY:</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='reject_qty' required />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='qty' required />
          </div>
        </div>
        <div className="col">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Doc. Number:</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='doc_number' required />
          </div>
        </div>
        <div className="col-5">
          <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
            <span className="input-group-text" id="inputGroup-sizing-sm">Dept. Head</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='dept_head' required />
          </div>
        </div>
      </div>
    </>
  )
};

export default CARInfo;
