import React, {Component} from 'react';
import './ExpressionInput.css';

class ExpressionInput extends Component {
  render() {
    return (
        <input className="expression-input" type="text" placeholder="0"/>
    );
  }
}

export default ExpressionInput;
