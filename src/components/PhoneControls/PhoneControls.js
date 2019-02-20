import React, {Component} from 'react';
import './PhoneControls.scss';

export default class PhoneControls extends Component {
  render() {
    return (
        <>
          <div className="visor">
            <span className="infrared-camera"/>
            <span className="proximity-sensor"/>
            <span className="speaker"/>
            <span className="camera"/>
            <span className="dot-projector"/>
          </div>
          <div className="volume-button"/>
          <div className="power-button"/>
        </>
    );
  }
}