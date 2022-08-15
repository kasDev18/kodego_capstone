import React, { Component } from 'react';
import styles from './QMRPaperCriteria.module.css';

class QMRPaperCriteria extends Component {
  paper_quantity_quality = [
    { list: 'Presence of Scratch', radio_name_accept: 'scratch', radio_name_reject: 'scratch' },
    { list: 'Presence of Spot', radio_name_accept: 'spot', radio_name_reject: 'spot' },
    { list: 'Presence of Contamination', radio_name_accept: 'contamination', radio_name_reject: 'contamination' },
    { list: 'Presence of Discoloration', radio_name_accept: 'discoloration', radio_name_reject: 'discoloration' },
    { list: 'Presence of Odor', radio_name_accept: 'odor', radio_name_reject: 'odor' },
    { list: 'Presence of Hole', radio_name_accept: 'hole', radio_name_reject: 'hole' },
    { list: 'Presence of Foreign Materials(Dust,Insects,etc...)', radio_name_accept: 'foreign_mat', radio_name_reject: 'foreign_mat' },
    { list: 'Missing Quantity', radio_name_accept: 'missing_qty', radio_name_reject: 'missing_qty' },
  ]
  paper_quantity_quality_array = [];

  CreatePaperQuantityQualityArray = () => {
    this.paper_quantity_quality_array = this.paper_quantity_quality.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id={element.radio_id_accept} value="Accept" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id={element.radio_id_reject} value="Reject" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  paper_handling = [
    { list: 'Mishandling of Product', radio_name_accept: 'mishandling', radio_name_reject: 'mishandling' },
    { list: 'Proper Arrangement of Products in Warehouse', radio_name_accept: 'proper_arrangement', radio_name_reject: 'proper_arrangement' }
  ]
  paper_handling_array = [];

  CreatePaperHandlingArray = () => {
    this.paper_handling_array = this.paper_handling.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id="flexRadioDefault1" value="Accept" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id="flexRadioDefault1" value="Reject" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  paper_documents = [
    { list: 'No Missing Documents', radio_name_accept: 'missing_docs', radio_name_reject: 'missing_docs' },
    { list: 'Documents are Completely Signed by Concerned Personnel', radio_name_accept: 'signed', radio_name_reject: 'signed' },
    { list: 'No Tampering, Contamination, or Crumpled Parts in the Documents', radio_name_accept: 'tampering', radio_name_reject: 'tampering' },
    { list: 'Documents are Original only and not Photocopy/Xerox', radio_name_accept: 'orig_docs', radio_name_reject: 'orig_docs' },
    { list: 'Documents are Secured with Plastic Cover', radio_name_accept: 'secured', radio_name_reject: 'secured' }
  ]
  paper_documents_array = [];

  CreateDocumentsArray = () => {
    this.paper_documents_array = this.paper_documents.map((element) => (
      <>
        <div className={styles.quality_quantity_cont + ' d-flex text-light pt-4'}>
          <div className='col'>
            {element.list}
          </div>
          <div className='col d-flex justify-content-end text-light'>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_accept + ' form-check-input'} type="radio" name={element.radio_name_accept} id="flexRadioDefault1" value="Accept" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Accept
              </label>
            </div>
            <div className={styles + ' form-check mx-3'}>
              <input className={styles.quality_quantity_reject + ' form-check-input'} type="radio" name={element.radio_name_reject} id="flexRadioDefault1" value="Reject" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Reject
              </label>
            </div>
          </div>
        </div >
      </>
    ))
  }

  render() {
    this.CreatePaperQuantityQualityArray();
    this.CreatePaperHandlingArray();
    this.CreateDocumentsArray();
    return (
      <div className={styles.QMR_paper_criteria + ' border border-1 border-warning p-3 mx-3'}>
        <div className={styles.QMR_paper_criteria_title}>
          <h6 className={styles + ' text-warning'}>A. Quality/Quantity of Paper:</h6>
          {this.paper_quantity_quality_array}
        </div>
        <div className={styles.QMR_paper_criteria_title + ' mt-5'}>
          <h6 className={styles + ' text-warning'}>B. Proper Handling(Warehouse):</h6>
          {this.paper_handling_array}
        </div>
        <div className={styles.QMR_paper_criteria_title + ' mt-5'}>
          <h6 className={styles + ' text-warning'}>B. Documents:</h6>
          {this.paper_documents_array}
        </div>
      </div>
    )
  }
}

export default QMRPaperCriteria;
