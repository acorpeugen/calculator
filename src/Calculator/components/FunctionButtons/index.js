import React, {Component} from 'react';
import './index.scss';

export default class FunctionButtons extends Component {
  render() {

    const {
      functionData
    } = this.props;

    return (
      <div className="function-buttons">
        {functionData.map(func => <button key={func.id} className="btn btn-gray">{func.value}</button>)}
      </div>
    );
  }
};