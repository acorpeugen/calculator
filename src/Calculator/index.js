import React, {Component} from 'react';
import ExpressionInput from './components/ExpressionInput/index';
import FunctionButtons from './components/FunctionButtons/index';
import OperationButtons from './components/OperationButtons/index';
import DigitButtons from './components/DigitButtons/index';
import './index.scss';

export default class Calculator extends Component {

  render() {

    const {
      calc
    } = this.props;
  
    console.log(OperationButtons);

    return (
      <div className="calculator" key={calc.id}>
        <ExpressionInput/>
        <FunctionButtons
          onClear={this.Clear}
          onPercent={this.Percent}
          onPlusMinus={this.PlusMinus}
        />
        <DigitButtons digitData={calc.digitData} />
        <OperationButtons
          value={this.value}
          onDivide={this.Divide}
          onMultiply={this.Multiply}
          onMinus={this.Minus}
          onPlus={this.Plus}
          onEqually={this.Equally}
        />
      </div>
    );
  };
  

  /* Function Buttons Verification Handel Click */ 
  Clear = () => {
    console.log(`Clear: ${this.props.calc.id}`);
  };

  Percent = () => {
    console.log(`Percent: ${this.props.calc.id}`);
  };

  PlusMinus = () => {
    console.log(`Plus Minus: ${this.props.calc.id}`);
  };

  /* Digit Buttons Verification Handel Click */
  Digit = () => {
    console.log(`Digit: ${this.props.calc.id}`);
  };

  /* Operation Buttons Verification Handel Click */
  Divide = () => {
    console.log(`Divide: ${this.props.calc.id}`);
  };

  Multiply = () => {
    console.log(`Multiply: ${this.props.calc.id}`);
  };

  Minus = () => {
    console.log(`Minus: ${this.props.calc.id}`);
  };

  Plus = () => {
    console.log(`Plus: ${this.props.calc.id}`);
  };

  Equally = () => {
    console.log(`Equally: ${this.props.calc.id}`);
  };
}