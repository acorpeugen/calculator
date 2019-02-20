import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './DigitButtons.scss';

export default class DigitButtons extends Component {

  static contextType = CalculatorContext;
  
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