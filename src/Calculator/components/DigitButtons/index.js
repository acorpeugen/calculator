import React, {Component} from 'react';
import './index.scss';

export default class DigitButtons extends Component {
  
  render() {

    const {
      digitData
    } = this.props;

    return (
      <div className="digit-buttons">
        {digitData.map(digit => <button key={digit.id} className="btn">{digit.value}</button>)}
      </div>
    );
  }
};