import React, {Component} from 'react';
import './index.scss';

export default class ExpressionInput extends Component {
  state = {
    inputValue: 0,
  };

  onInputChange = () => {
    console.log(`Change input value`);
  };

  render() {
    const {inputValue} = this.state;

    return <div className="expression-input" onChange={this.onInputChange}>{inputValue}</div>
  }
}