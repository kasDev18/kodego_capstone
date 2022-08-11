import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.related_issues_array = this.related_issues.map((element) => (
      <div className={styles + ' d-flex'}>
        <div class="form-check">
          <input class="form-check-input" type="radio" value={element.value} id="flexCheckDefault" name={element.name} />
          <label class="form-check-label" for="flexCheckDefault">
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
            <img src={reject_flow} class="img-fluid" alt="..." />
          </div>
        </div>
        <div className={styles.CAR_related_issues + ' col pt-4 text-warning'}>
          <h5>Related</h5>
          <h5>Issues</h5>
          <div className='px-5 pt-3'>
            {this.related_issues_array}
          </div>
        </div>
      </div>
    )
  }
}

export default CARWorkflowPlan;
