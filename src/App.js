import React, {Component} from 'react';
import Controls from './PhoneControls/index';
import Calculator from './Calculator/index';
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
          value: '+/-'
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
      <div className="phone">
        <Controls/>
        {this.calculator.map(calc => <Calculator calc={calc} key={calc.id} />)}
      </div>
    );
  }
}