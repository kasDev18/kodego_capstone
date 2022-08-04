import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './QMRNonPaper.module.css';

class QMRNonPaper extends Component {
  non_paper_quantity_quality = [
    { list: 'Presence of Discoloration(Off-color)', radio_name_accept: 'qualityQuantityNameAccept1', radio_name_reject: 'qualityQuantityNameAccept1' },
    { list: 'Presence of Foreign Materials', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
    { list: 'No Missing Quantity', radio_name_accept: 'qualityQuantityNameAccept3', radio_name_reject: 'qualityQuantityNameAccept3' },
  ]
  non_paper_quantity_quality_array = [];

  CreateNonPaperQuantityQualityArray = () => {
    this.non_paper_quantity_quality_array = this.non_paper_quantity_quality.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id={element.radio_id_accept} />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id={element.radio_id_reject} />
              <label class="form-check-label" for="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  non_paper_quantity_container = [
    { list: 'Presence of Dent/Broken Container', radio_name_accept: 'qualityQuantityNameAccept1', radio_name_reject: 'qualityQuantityNameAccept1' },
    { list: 'Presence of Leak', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
    { list: 'Presence of Liquid Contamination', radio_name_accept: 'qualityQuantityNameAccept3', radio_name_reject: 'qualityQuantityNameAccept3' },
  ]
  non_paper_quantity_container_array = [];

  CreateNonPaperQualityContainerArray = () => {
    this.non_paper_quantity_container_array = this.non_paper_quantity_container.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id={element.radio_id_accept} />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id={element.radio_id_reject} />
              <label class="form-check-label" for="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  non_paper_handling = [
    { list: 'Mishandling of Product', radio_name_accept: 'qualityQuantityNameAccept1', radio_name_reject: 'qualityQuantityNameAccept1' },
    { list: 'Proper Arrangement of Products in Warehouse', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
  ]
  non_paper_handling_array = [];

  CreateNonPaperHandlingArray = () => {
    this.non_paper_handling_array = this.non_paper_handling.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id={element.radio_id_accept} />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id={element.radio_id_reject} />
              <label class="form-check-label" for="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  non_paper_documents = [
    { list: 'No Missing Documents', radio_name_accept: 'qualityQuantityNameAccept1', radio_name_reject: 'qualityQuantityNameAccept1' },
    { list: 'Documents are Completely Signed by Concerned Personnel', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
    { list: 'No Tampering, Contamination, or Crumpled Parts in the Documents', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
    { list: 'Documents are Original only and not Photocopy/Xerox', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
    { list: 'Documents are Secured with Plastic Cover', radio_name_accept: 'qualityQuantityNameAccept2', radio_name_reject: 'qualityQuantityNameAccept2' },
  ]
  non_paper_documents_array = [];

  CreateNonPaperDocumentArray = () => {
    this.non_paper_documents_array = this.non_paper_documents.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id={element.radio_id_accept} />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id={element.radio_id_reject} />
              <label class="form-check-label" for="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  render() {
    this.CreateNonPaperQuantityQualityArray();
    this.CreateNonPaperQualityContainerArray();
    this.CreateNonPaperHandlingArray();
    this.CreateNonPaperDocumentArray();
    return (
      <div className={styles.QMR}>
        <div className={styles.QMR_title + ' text-light pt-2 px-2'}>
          <h5><i className="text-light">Quality Monitoring Report (Non-Paper)</i></h5>
          <hr className='text-muted'></hr>
        </div>
        <div className='p-2'>
          <div class="row">
            <div class="col-4">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span className={styles + ' input-group-text'} id="inputGroup-sizing-sm">name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col-4">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <label class="input-group-text" for="inputGroupSelect01">Department</label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected="" class='d-none'>Department</option>
                  <option value="1">Production</option>
                  <option value="1">WEB</option>
                  <option value="1">Pre-Press</option>
                  <option value="1">TSQA</option>
                  <option value="1">Logistic</option>
                  <option value="1">Engineering</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Date</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <label class="input-group-text" for="inputGroupSelect01">Type</label>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value='Ink' />
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Prod.Name:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Supplier</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Doc. Number:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div class="col-5">
              <div className={styles.QMR_input_info + ' input-group input-group-md mb-3 col'}>
                <span class="input-group-text" id="inputGroup-sizing-sm">Dept. Head</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
          <hr></hr>
          <div>
            <span className={styles + ' text-light mx-3'}>Please choose carefully the right answer below</span>
          </div>
          <div className='p-3'>
            <div className={styles.QMR_nonpaper_ink_cont + ' mb-3'}>
              <div className={styles.QMR_nonpaper_ink + ' border border-1'}></div>
              <div className='d-flex align-items-center'>
                <div className={styles.QMR_nonpaper_ink_option + ' mb-2 mt-2'}></div>
                <span className='mx-2 text-light text-decoration-underline'>
                  <h6>Click here to navigate color</h6>
                </span>
              </div>
            </div>
            <div className={styles.QMR_legend + '  d-flex align-items-center'}>
              <div className={styles + ' d-flex p-3'}>
                <div className={styles + ' pt-1'}>
                  <h6 className='text-info'>Legend</h6>
                </div>
                <div className='d-flex mx-2'>
                  <div className={styles.QMR_legend_criteria + ' mx-2'}>
                    <div class="form-check">
                      <input class="form-check-input border rounded-circle bg-success" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label text-light" for="flexRadioDefault1">
                        Accept-No Evidence of Discrepancy/Passed in Criteria
                      </label>
                    </div>
                  </div>
                  <div className={styles.QMR_legend_criteria + ' mx-2'}>
                    <div class="form-check">
                      <input class="form-check-input border rounded-circle bg-danger" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label text-light" for="flexRadioDefault1">
                        Reject-Failed in Criteria
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.QMR_paper_criteria + ' border border-1 border-warning p-3 mx-3'}>
            <div className={styles.QMR_paper_criteria_title}>
              <h6 className={styles + ' text-warning'}>A. Quality/Quantity of Ink:</h6>
              {this.non_paper_quantity_quality_array}
            </div>
            <div className={styles.QMR_paper_criteria_title + ' mt-5'}>
              <h6 className={styles + ' text-warning'}>B. Quality of Container:</h6>
              {this.non_paper_quantity_container_array}
            </div>
            <div className={styles.QMR_paper_criteria_title + ' mt-5'}>
              <h6 className={styles + ' text-warning'}>C. Proper Handling(Warehouse):</h6>
              {this.non_paper_handling_array}
            </div>
            <div className={styles.QMR_paper_criteria_title + ' mt-5'}>
              <h6 className={styles + ' text-warning'}>D. Documents:</h6>
              {this.non_paper_documents_array}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end p-3 mx-2'>
          <div className='mx-1'>
            <button type="button" class="btn btn-success">Submit</button>
          </div>
          <div className='mx-1'>
            <button type="button" class="btn btn-primary">Print</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QMRNonPaper;
