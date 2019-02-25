import React, {Component} from 'react';
import CalculatorContext from '../../context';

export default class CalculatorManager extends Component {

  state = {
    operator: null,
    inputValue: 0,
    value: null,
    waitingForOperand: false,
  };

  render() {
    const {
      state,
    } = this;

    return (
        <CalculatorContext.Provider value={{
          ...state,
          digitClick: this.digitClick,
          digitDote: this.digitDote,

          clearClick: this.clearClick,
          percentClick: this.percentClick,
          plusMinusClick: this.plusMinusClick,

          operationClick: this.operationClick,
        }}>
          {this.props.children}
        </CalculatorContext.Provider>
    );
  }

  /* Events Digit Buttons */
  digitClick = () => {

  };

  digitDote = () => {
    const {inputValue} = this.state;
    if (!(/\./).test(inputValue)) {
      this.setState({
        inputValue: inputValue + '.',
        waitingForOperand: false
      })
    }
  };

  /* Events Function Buttons */
  clearClick = () => {

  };

  percentClick = () => {

  };

  plusMinusClick = () => {
  };

  /* Events Operation Buttons */
  operationClick = () => {

  };
}