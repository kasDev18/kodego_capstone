import React, { Component } from 'react';
import styles from './QMRNonPaperInkCriteria.module.css';

class QMRNonPaperInkCriteria extends Component {
  non_paper_quantity_quality = [
    { list: 'No Missing Quantity', radio_name_accept: 'complete_qty', radio_name_reject: 'complete_qty' },
    { list: 'Presence of Discoloration(Off-color)', radio_name_accept: 'discoloration', radio_name_reject: 'discoloration' },
    { list: 'Presence of Foreign Materials', radio_name_accept: 'foreign_mat', radio_name_reject: 'foreign_mat' }
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
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} value="Accept" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} value="Reject" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  non_paper_quantity_container = [
    { list: 'Presence of Dent/Broken Container', radio_name_accept: 'dent_broken', radio_name_reject: 'dent_broken' },
    { list: 'Presence of Leak', radio_name_accept: 'leak', radio_name_reject: 'leak' },
    { list: 'Presence of Liquid Contamination', radio_name_accept: 'liquid_contam', radio_name_reject: 'liquid_contam' },
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
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} value="Accept" />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} value="Reject" />
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
    { list: 'Mishandling of Product', radio_name_accept: 'mishandling', radio_name_reject: 'mishandling' },
    { list: 'Proper Arrangement of Products in Warehouse', radio_name_accept: 'proper_arrangement', radio_name_reject: 'proper_arrangement' },
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
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} value="Accept" />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} value="Reject" />
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
    { list: 'No Missing Documents', radio_name_accept: 'missing_docs', radio_name_reject: 'missing_docs' },
    { list: 'Documents are Completely Signed by Concerned Personnel', radio_name_accept: 'signed', radio_name_reject: 'signed' },
    { list: 'No Tampering in the Documents', radio_name_accept: 'tampering', radio_name_reject: 'tampering' },
    { list: 'No Contamination in the Documents', radio_name_accept: 'docs_contam', radio_name_reject: 'docs_contam' },
    { list: 'No Crumpled Parts in the Documents', radio_name_accept: 'crumpled', radio_name_reject: 'crumpled' },
    { list: 'Documents are Original only and not Photocopy/Xerox', radio_name_accept: 'orig', radio_name_reject: 'orig' },
    { list: 'Documents are Secured with Plastic Cover', radio_name_accept: 'secured', radio_name_reject: 'secured' },
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
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} value="Accept" />
              <label class="form-check-label" for="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} value="Reject" />
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
