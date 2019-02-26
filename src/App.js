import React, {Component} from 'react';
import PhoneControls from './components/PhoneControls/PhoneControls';
import Input from './components/Input/Input';
import Buttons from './components/Buttons/Buttons';
import * as math from 'mathjs';
import './App.scss';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      calculation: [],
      sum: 0
    };
  }

  render() {

    return (
        <div className="phone">
          <PhoneControls/>
          <div className="calculator">
            <Input calculation={this.state.calculation} sum={this.state.sum}/>
            <Buttons triggerSum={this.sum} triggerCalculation={this.calculate} onClick={this.handleClick}/>
          </div>
        </div>
    );
  }

  calculate = (calculation) => {
    this.setState({
      calculation,
    })
  };

  sum = (calculation) => {

    if (String(calculation).length === 0) {
      calculation = 0;
    } else {
      calculation = math.eval(calculation);
    }

    this.setState({
      sum: calculation
    })
  };
}