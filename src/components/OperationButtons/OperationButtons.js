import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './OperationButtons.scss';

export default class OperationButtons extends Component {
  static contextType = CalculatorContext;

  render() {
    const operationValues = ['/', 'x', '-', '+', '='];

    return (
        <div className="operation-buttons">
          <button className="btn btn-orange" data-key={operationValues[0]}
                  onClick={this.operationClick}>{operationValues[0]}</button>
          <button className="btn btn-orange" data-key={operationValues[1]}
                  onClick={this.operationClick}>{operationValues[1]}</button>
          <button className="btn btn-orange" data-key={operationValues[2]}
                  onClick={this.operationClick}>{operationValues[2]}</button>
          <button className="btn btn-orange" data-key={operationValues[3]}
                  onClick={this.operationClick}>{operationValues[3]}</button>
          <button className="btn btn-orange" data-key={operationValues[4]}
                  onClick={this.operationClick}>{operationValues[4]}</button>
        </div>
    );
  }

  operationClick = (e) => {
    this.context.operationClick(this.context.inputValue + e.target.dataset.key);
    console.log(e.target.dataset.key);
  }
}