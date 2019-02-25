import React, {Component} from 'react';
import PhoneControls from './components/PhoneControls/PhoneControls';
import ExpressionInput from './components/ExpressionInput/ExpressionInput';
import FunctionButtons from './components/FunctionButtons/FunctionButtons';
import OperationButtons from './components/OperationButtons/OperationButtons';
import DigitButtons from './components/DigitButtons/DigitButtons';
import CalculatorManager from "./components/CalculatorManager/CalculatorManager";
import './App.scss';

export default class App extends Component {

  render() {

    return (
        <CalculatorManager>
          <div className="phone">
            <PhoneControls/>
            <div className="calculator">
              <ExpressionInput/>
              <FunctionButtons/>
              <DigitButtons/>
              <OperationButtons/>
            </div>
          </div>
        </CalculatorManager>
    );
  }
}