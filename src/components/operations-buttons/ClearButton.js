import React, {Component} from 'react';
import './ClearButton.css';

class ClearButton extends Component {
  render() {
    return <button className="btn btn-gray btn-clear" type="reset">AC</button>
  }
}

export default ClearButton;