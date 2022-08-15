import React from 'react';
import styles from './CARInfo.module.css';

const CARInfo = () => (
  <>
    <div className="row">
      <div className="col-4">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">name</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="name" />
        </div>
      </div>
      <div className="col-4">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
          <select className="form-select" id="inputGroupSelect01" name='department'>
            <option defaultValue className='d-none'>Department</option>
            <option value="Production">Production</option>
            <option value="WEB">WEB</option>
            <option value="Pre-Press">Pre-Press</option>
            <option value="TSQA">TSQA</option>
            <option value="Logistic">Logistic</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
      </div>
      <div className="col">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
          <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='date' />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
          <select className="form-select" id="inputGroupSelect01" name='product_type'>
            <option defaultValue className="d-none">Prod. Type</option>
            <option value="Paper">Paper</option>
            <option value="Non-Paper">Non-Paper</option>
          </select>
        </div>
      </div>
      <div className="col">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Prod.Name:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='product_name' />
        </div>
      </div>
      <div className="col">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Supplier</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='supplier' />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-8">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Reject Description:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='reject_desc' />
        </div>
      </div>
      <div className="col">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Reject QTY:</span>
          <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='reject_qty' />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
          <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='qty' />
        </div>
      </div>
      <div className="col">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Doc. Number:</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='doc_number' />
        </div>
      </div>
      <div className="col-5">
        <div className={styles.QMR_input_info + ' input-group input-group-sm mb-3 col'}>
          <span className="input-group-text" id="inputGroup-sizing-sm">Dept. Head</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name='dept_head' />
        </div>
      </div>
    </div>
  </>
);

export default CARInfo;
