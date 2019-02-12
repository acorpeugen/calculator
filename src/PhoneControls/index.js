import React, {Component} from 'react';
import './index.scss';

export default class Controls extends Component {
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