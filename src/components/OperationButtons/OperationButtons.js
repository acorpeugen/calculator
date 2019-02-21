import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './OperationButtons.scss';

export default class OperationButtons extends Component {

  static contextType = CalculatorContext;

  render() {

    const {
      operationData
    } = this.props;

    return (
        <div className="operation-buttons">
          {operationData.map(operation =>
              <button key={operation.id} onClick={this.onOperationClick} className="btn btn-orange">
                {operation.value}
              </button>)}
        </div>
    );
  }

  onOperationClick = () => {
    console.log(`Operation Button Press`);
  }
}