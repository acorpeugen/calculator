import React, {Component} from 'react';
import CalculatorContext from '../../context';

export default class CalculatorManager extends Component {

  state = {
    inputValue: 0,
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
  digitClick = (inputValue) => {
    this.setState({
      inputValue
    })
  };

  digitDote = () => {
    const {inputValue} = this.state;
    if (!(/\./).test(inputValue)) {
      this.setState({
        inputValue: inputValue + '.',
      })
    }
  };

  /* Events Function Buttons */
  clearClick = () => {

  };

  percentClick = () => {

  };

  plusMinusClick = (inputValue) => {
    this.setState({
      inputValue: (parseFloat(inputValue) * -1).toString()
    })
  };

  /* Events Operation Buttons */
  operationClick = () => {
    this.setState({
    })
  };
}