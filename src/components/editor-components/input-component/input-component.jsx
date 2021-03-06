import React from 'react';
import './input-component.scss'

export default class InputComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: props.value };
  }

  render () {
    return (
      <div className="InputComponent">
        <input className="InputComponent-input"
          id={this.props.id}
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={e => this.handleChange(e)}
          onFocus={e => this.props.onFocus(e)}
          onBlur={e => this.props.onBlur(e)}
          onKeyDown={e => this.props.onKeyDown(e)} />
      </div>
    );
  }

  handleChange (e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  }
}

InputComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onKeyDown: React.PropTypes.func
};

InputComponent.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onKeyDown: () => {}
};
