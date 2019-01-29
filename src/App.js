import React, {Component} from 'react';
import ExpressionInput from './components/expression-input/ExpressionInput';
import ClearButton from './components/operations-buttons/ClearButton';
import PercentButton from './components/operations-buttons/PercentButton';
import PlusMinusButton from './components/operations-buttons/PlusMinusButton';
import DigitButtons from './components/digit-buttons/DigitButtons';
import Divide from './components/operations-buttons/Divide';
import Multiply from './components/operations-buttons/Multiply';
import Minus from './components/operations-buttons/Minus';
import Plus from './components/operations-buttons/Plus';
import Equally from './components/operations-buttons/Equally';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="iphone-x">
          {/* Iphone-x elements for visualisation controls */}
          <div className="visor">
            <span className="infrared-camera"/>
            <span className="proximity-sensor"/>
            <span className="speaker"/>
            <span className="camera"/>
            <span className="dot-projector"/>
          </div>
          <div className="volume-button"/>
          <div className="power-button"/>

          <div className="calculator">
            <ExpressionInput/>
            <ClearButton/>
            <PercentButton/>
            <PlusMinusButton/>
            <DigitButtons/>
            <Divide/>
            <Multiply/>
            <Minus/>
            <Plus/>
            <Equally/>
          </div>
        </div>
    );
  }
}

export default App;