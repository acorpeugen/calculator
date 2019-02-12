import React, {Component} from 'react';
import './index.scss';

export default class DigitButtons extends Component {
  
  render() {

    const {
      value,
      onDigit
    } = this.props;

    return (
      <div className="digit-buttons">
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
        <button className="btn" value={value} onClick={onDigit}/>
      </div>
    );
  }
}