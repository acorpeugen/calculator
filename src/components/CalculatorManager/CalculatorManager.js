import React, {Component} from 'react';
import CalculatorContext from '../../context';

export default class CalculatorManager extends Component {

  state = {};

  render() {
    const {
      state
    } = this.props;

    return (
        <CalculatorContext.Provider value={{
          ...state
        }}>
          {this.props.children}
        </CalculatorContext.Provider>
    );
  }
}