import React from 'react';
import './label-component.scss'

export default class LabelComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      linkLabel: 'linkLabel' in props ? props.linkLabel : true
    };
  }

  render () {
    const forComponent = this.state.linkLabel ? {
      htmlFor: this.props.id
    } : {};

    return (
        <div className="LabelComponent">
          <label className="LabelComponent-label"
            {...forComponent}>
            {this.props.text}</label>
        </div>
    );
  }
}

LabelComponent.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.object,
  linkLabel: React.PropTypes.bool
};

LabelComponent.defaultProps = {
  id: '',
  label: {},
  linkLabel: true
};
