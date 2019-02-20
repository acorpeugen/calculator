import React, {Component} from 'react';
import CalculatorContext from '../../context';
import './ExpressionInput.scss';

export default class ExpressionInput extends Component {

  static contextType = CalculatorContext;

  state = {
    inputValue: 0,
  };

  render() {
    const {inputValue} = this.state;

    return <div className="expression-input" onChange={this.onInputChange}>{inputValue}</div>
  }

  onInputChange = () => {
    console.log(`Change input value`);
  };
}