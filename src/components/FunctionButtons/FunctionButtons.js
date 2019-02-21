import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './FunctionButtons.scss';

export default class FunctionButtons extends Component {

  static contextType = CalculatorContext;

  render() {

    const {
      functionData
    } = this.props;

    return (
        <div className="function-buttons">
          {functionData.map(func =>
              <button key={func.id}
                      onClick={this.onFunctionClick}
                      className="btn btn-gray">
                {func.value}
              </button>
          )}
        </div>
    );
  }

  onFunctionClick = () => {
    console.log(`Function Button Press`);
  }
};