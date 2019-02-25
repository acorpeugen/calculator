import React, {Component} from 'react';
import CalculatorContext from '../../context';
import './ExpressionInput.scss';

export default class ExpressionInput extends Component {

  static contextType = CalculatorContext;

  render() {
    const {inputValue} = this.context;
    return <div className="expression-input">{inputValue}</div>
  }
}