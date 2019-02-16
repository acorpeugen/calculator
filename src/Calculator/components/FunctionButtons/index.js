import React, {Component} from 'react';
import './index.scss';

export default class FunctionButtons extends Component {
  render() {

    const {
      onClear,
      onPercent,
      onPlusMinus
    } = this.props;

    return (
      <div className="function-buttons">
        <button type="reset" value="AC" className="btn btn-gray" onClick={onClear}>{}</button>
        <button type="button" value="%" className="btn btn-gray" onClick={onPercent}>{}</button>
        <button type="button" value="+/-" className="btn btn-gray" onClick={onPlusMinus}>{}</button>
      </div>
    );
  }
};