import React from 'react';
import ReactSlider from 'react-slider';
import './slider-component.scss';

export default class SliderComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: props.value }
  }

  render () {
    return (
      <div>
        <ReactSlider className="SliderComponent"
          defaultValue={ 50 }
          onChange={ e => this.handleChange(e) }
          withBars >
          <div className="my-handle">{ this.state.value }</div>
        </ReactSlider>
      </div>
    );
  }

  handleChange (value) {
    this.setState({ value: value });
  }
}

SliderComponent.propTypes = {
  value: React.PropTypes.number
};

SliderComponent.defaultProps = {
  value: 50
};
