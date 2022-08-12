import React, { Component } from 'react';
import styles from './QMRNonPaperInkCriteria.module.css';

class QMRNonPaperInkCriteria extends Component {
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
    )
  }
}

export default QMRNonPaperInkCriteria;
