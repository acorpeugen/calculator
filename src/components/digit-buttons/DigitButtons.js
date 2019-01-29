import React, {Component} from 'react';
import './DigitButtons.css'

class DigitButtons extends Component {
  render() {
    return (
        <div className="digit-buttons">
          <button className="btn btn-dark btn-digit">7</button>
          <button className="btn btn-dark btn-digit">8</button>
          <button className="btn btn-dark btn-digit">9</button>
          <button className="btn btn-dark btn-digit">4</button>
          <button className="btn btn-dark btn-digit">5</button>
          <button className="btn btn-dark btn-digit">6</button>
          <button className="btn btn-dark btn-digit">1</button>
          <button className="btn btn-dark btn-digit">2</button>
          <button className="btn btn-dark btn-digit">3</button>
          <button className="btn btn-dark btn-digit">0</button>
          <button className="btn btn-dark btn-digit">.</button>
        </div>
    );
  }
}

export default DigitButtons;