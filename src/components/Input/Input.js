import React, {Component} from 'react';
import './Input.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculation: [],
      sum: 0
    };
  }

  render() {
    return(
        <div className="input">
          <span className="current">{this.props.calculation}</span>
          <span className="result">{this.props.sum}</span>
        </div>
    );
  }
}