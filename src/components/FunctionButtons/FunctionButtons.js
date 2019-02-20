import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './FunctionButtons.scss';

export default class FunctionButtons extends Component {

  static contextType = CalculatorContext;

  render() {

    const {
      buttonPressed,
      functionData
    } = this.props;

    return (
        <div className="function-buttons">
          {functionData.map(func =>
              <button key={func.id}
                      onClick={buttonPressed}
                      className="btn btn-gray">
                {func.value}
              </button>
          )}
        </div>
    );
  }
};