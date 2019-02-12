import React, {Component} from 'react';
import './index.scss';

export default class FunctionButtons extends Component {
  render() {

    const {
      value,
      onClear,
      onPercent,
      onPlusMinus
    } = this.props;

    return (
      <div className="function-buttons">
        <button type="reset" value={value} className="btn btn-gray" onClick={onClear} />
        <button type="button" value={value} className="btn btn-gray" onClick={onPercent} />
        <button type="button" value={value} className="btn btn-gray" onClick={onPlusMinus} />
      </div>
    );
  }
};