import React, { Component } from 'react';
import styles from './CARWorkflowPlan.module.css';
import reject_flow from './image/20121212111931_59859.jpg'

class CARWorkflowPlan extends Component {
  related_issues = [
    { issues: 'Machine', value: 'Machine', name: 'related_issues' },
    { issues: 'Manpower', value: 'Manpower', name: 'related_issues' },
    { issues: 'Customer', value: 'Customer', name: 'related_issues' },
    { issues: 'Others', value: 'Others', name: 'related_issues' },
  ]

  related_issues_array = [];

  CreateRelatedIssuesArray = () => {
    this.related_issues_array = this.related_issues.map((element, index) => (
      <div className={styles + ' d-flex'} key={index}>
        <div className="form-check">
          <input className="form-check-input" type="radio" value={element.value} id="flexCheckDefault" name={element.name} required />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {element.issues}
          </label>
        </div>
      </div>
    ))
  }

  render() {
    this.CreateRelatedIssuesArray()
    return (
      <div className='p-2 border rounded border-warning d-flex'>
        <div className={styles.CAR_workflow_plan + ' col-9'}>
          <div className='text-warning d-flex justify-content-center pt-2'>
            <h5>Reject Workflow Plan</h5>
          </div>
          <div className='d-flex justify-content-center'>
            <img src={reject_flow} className="img-fluid" alt="..." />
          </div>
        </div>
        <div className={styles.CAR_related_issues + ' col pt-4 text-warning'}>
          <h5>Related</h5>
          <h5>Issues</h5>
          <div className='px-5 pt-3'>
            {this.related_issues_array}
          </div>
          <textarea placeholder='Specify if others...' name='rel_issues_others_desc'></textarea>
        </div>
      </div>
    )
  }
}

export default CARWorkflowPlan;
