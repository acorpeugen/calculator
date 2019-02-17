import React, {Component} from 'react';
import './index.scss';

export default class OperationButtons extends Component {
  render() {

    const {
      operationData
    } = this.props;

    return (
      <div className="operation-buttons">
        {operationData.map(operation => <button key={operation.id} className="btn btn-orange">{operation.value}</button>)}
      </div>
    );
  }
}