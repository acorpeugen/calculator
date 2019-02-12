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
        <button type="button" value={value} className="btn btn-orange" onClick={onDivide} />
        <button type="button" value={value} className="btn btn-orange" onClick={onMultiply} />
        <button type="button" value={value} className="btn btn-orange" onClick={onMinus}/>
        <button type="button" value={value} className="btn btn-orange" onClick={onPlus}/>
        <button type="button" value={value} className="btn btn-orange" onClick={onEqually}/>
      </div>
    );
  }
}