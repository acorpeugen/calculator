import React, {Component} from 'react';
import './index.scss';

export default class OperationButtons extends Component {
  render() {

    const {
      value,
      onDivide,
      onMultiply,
      onMinus,
      onPlus,
      onEqually
    } = this.props;

    return (
      <div className="operation-buttons">
        <button type="button" value="/" className="btn btn-orange" onClick={onDivide}>{}</button>
        <button type="button" value="*" className="btn btn-orange" onClick={onMultiply}>{}</button>
        <button type="button" value="-" className="btn btn-orange" onClick={onMinus}>{}</button>
        <button type="button" value="+" className="btn btn-orange" onClick={onPlus}>{}</button>
        <button type="button" value="=" className="btn btn-orange" onClick={onEqually}>{}</button>
      </div>
    );
  }
}