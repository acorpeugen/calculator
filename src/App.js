import React, {Component} from 'react';
import CalculatorManager from "./components/CalculatorManager/CalculatorManager";
import PhoneControls from './components/PhoneControls/PhoneControls';
import ExpressionInput from './components/ExpressionInput/ExpressionInput';
import FunctionButtons from './components/FunctionButtons/FunctionButtons';
import OperationButtons from './components/OperationButtons/OperationButtons';
import DigitButtons from './components/DigitButtons/DigitButtons';
import './App.scss';

export default class App extends Component {

  calculator = [
    {
      id: 1,
      functionData: [
        {
          id: 1,
          value: 'AC'
        },
        {
          id: 2,
          value: '%'
        },
        {
          id: 3,
          value: '+ / -'
        }
      ],
      operationData: [
        {
          id: 1,
          value: '/'
        },
        {
          id: 2,
          value: '*'
        },
        {
          id: 3,
          value: '-'
        },
        {
          id: 4,
          value: '+'
        },
        {
          id: 5,
          value: '='
        }
      ],
      digitData: [
        {
          id: 1,
          value: 7
        },
        {
          id: 2,
          value: 8
        },
        {
          id: 3,
          value: 9
        },
        {
          id: 4,
          value: 4
        },
        {
          id: 5,
          value: 5
        },
        {
          id: 6,
          value: 6
        },
        {
          id: 7,
          value: 1
        },
        {
          id: 8,
          value: 2
        },
        {
          id: 9,
          value: 3
        },
        {
          id: 10,
          value: 0
        },
        {
          id: 11,
          value: '.'
        },
      ]
    }
  ];

  render() {
    return (
        <CalculatorManager>
          <div className="phone">
            <PhoneControls/>
            {this.calculator.map(calc =>
                <div className="calculator" key={calc.id}>
                  <ExpressionInput/>
                  <FunctionButtons functionData={calc.functionData}/>
                  <DigitButtons digitData={calc.digitData}/>
                  <OperationButtons operationData={calc.operationData}/>
                </div>
            )}
          </div>
        </CalculatorManager>
    );
  }
}