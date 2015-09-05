import React from 'react';
import './textarea-component.scss'

export default class TextareaComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: props.value };
  }

  render () {
    return (
      <div className="TextareaComponent">
        <textarea className="TextareaComponent-textarea"
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

TextareaComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onKeyDown: React.PropTypes.func
};

TextareaComponent.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onKeyDown: () => {}
};
