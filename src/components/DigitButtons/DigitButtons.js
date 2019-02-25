import React, {Component} from 'react';
import CalculatorContext from "../../context";
import './DigitButtons.scss';

export default class DigitButtons extends Component {

  static contextType = CalculatorContext;

  render() {
    const digitValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    return (
        <div className="digit-buttons">
          <button className="btn" data-key={digitValues[0]} onClick={this.digitClick}>{digitValues[0]}</button>
          <button className="btn" data-key={digitValues[1]} onClick={this.digitClick}>{digitValues[1]}</button>
          <button className="btn" data-key={digitValues[2]} onClick={this.digitClick}>{digitValues[2]}</button>
          <button className="btn" data-key={digitValues[3]} onClick={this.digitClick}>{digitValues[3]}</button>
          <button className="btn" data-key={digitValues[4]} onClick={this.digitClick}>{digitValues[4]}</button>
          <button className="btn" data-key={digitValues[5]} onClick={this.digitClick}>{digitValues[5]}</button>
          <button className="btn" data-key={digitValues[6]} onClick={this.digitClick}>{digitValues[6]}</button>
          <button className="btn" data-key={digitValues[7]} onClick={this.digitClick}>{digitValues[7]}</button>
          <button className="btn" data-key={digitValues[8]} onClick={this.digitClick}>{digitValues[8]}</button>
          <button className="btn" data-key={digitValues[9]} onClick={this.digitClick}>{digitValues[9]}</button>
          <button className="btn" data-key={digitValues[10]} onClick={this.digitDote}>{digitValues[10]}</button>
        </div>
    );
  }

  digitClick = (e) => {
    this.context.digitClick(this.context.inputValue + e.target.dataset.key);
    console.log(e.target.dataset.key);
  };

  digitDote= (e) => {
    this.context.digitDote(this.context.inputValue + e.target.dataset.key);
    console.log(e.target.dataset.key);
  }
};