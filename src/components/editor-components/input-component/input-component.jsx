import React from 'react';
import './input-component.scss'

export default class InputComponent extends React.Component {
  render () {
    const component = this.props.component;

    return (
      <div className="InputComponent">
        <label className="InputComponent-label"
          htmlFor={component.id}>
          {component.label}</label>
        <input className="InputComponent-input"
          onChange={e => this.handleOnChange(e)}
          id={component.id} />
      </div>
    );
  }

  handleOnChange (e) {
    if (this.props.component.onChange) {
      this.props.component.onChange(e);
    }
  }
}

InputComponent.propTypes = {
  component: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func
  })
};

InputComponent.defaultProps = {
  component: {
    id: '',
    label: 'Label'
  }
};
