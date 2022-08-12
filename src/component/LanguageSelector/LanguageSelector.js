import React, { Component } from 'react';
import styles from './LanguageSelector.module.css';
import { FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import i18next from 'i18next';

class LanguageSelector extends Component {
  // Language Selector
  changeLanguage = (option) => {
    localStorage.setItem('lang', option.target.value);
    window.location.reload();
  };

  render() {
    const lang = localStorage.getItem('lang') || 'en';
    return (
      <FormGroup
        className={styles.language_selector + ' bg-dark d-flex m-3 border rounded'}
      >
        <Input
          className="bg-dark text-light"
          type="select"
          name="select"
          id="exampleSelect1"
          onChange={this.changeLanguage}
          value={lang}
        >
          <option value='en' className="bg-dark text-light">
            English
          </option>
          <option value='cn' className="bg-dark text-light">
            国语
          </option>
        </Input>
      </FormGroup>
    )
  }
}



export default LanguageSelector;
