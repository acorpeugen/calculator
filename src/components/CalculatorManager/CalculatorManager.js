import React, {Component} from 'react';
import CalculatorContext from '../../context';

export default class CalculatorManager extends Component {
  
  state = {
    inputValue: 0,
  };

  render() {
    const {
      state
    } = this;

    return (
        <CalculatorContext.Provider value={{
          ...state,
          onDigitClick: this.onDigitClick
        }}>
          {this.props.children}
        </CalculatorContext.Provider>
    );
  }
  
  onDigitClick = (inputValue) => {
    this.setState({
      inputValue
    });
    console.log(`Digit Button Press`);
  }
}