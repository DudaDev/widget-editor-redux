import React from 'react';
import ReactSlider from 'react-slider';
import './slider-component.scss';

export default class SliderComponent extends React.Component {
  render () {
    return (
      <ReactSlider withBars
        className="SliderComponent">
        <div className="my-handle">1</div>
        <div className="my-handle">2</div>
      </ReactSlider>
    );
  }
}
