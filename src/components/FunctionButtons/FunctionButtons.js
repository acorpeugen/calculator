import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './FunctionButtons.scss';

export default class FunctionButtons extends Component {
  static contextType = CalculatorContext;

  render() {
    const functionValues = ['AC', '%', '±'];

    return (
        <div className="function-buttons">
          <button className="btn btn-gray"
                  data-key={functionValues[0]}
                  onClick={this.clearClick}>
            {functionValues[0]}
          </button>
          <button className="btn btn-gray"
                  data-key={functionValues[1]}
                  onClick={this.percentClick}>
            {functionValues[1]}
          </button>
          <button className="btn btn-gray"
                  data-key={functionValues[2]}
                  onClick={this.plusMinusClick}>
            {functionValues[2]}
          </button>
        </div>
    );
  }

  clearClick = (e) => {
    console.log(e.target.dataset.key);
  };

  percentClick = (e) => {
    console.log(e.target.dataset.key);
  };

  plusMinusClick = (e) => {
    this.context.plusMinusClick(this.context.inputValue + e.target.dataset.key);
    console.log(e.target.dataset.key);
  }
};