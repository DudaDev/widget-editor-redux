import React from 'react';
import './editor-tab.scss'

export default class Tab extends React.Component {
	render () {
    return (
      <div>
        <a href="#"
          onClick={e => this.handleClick(e)}>Editor Tab</a>
      </div>
		);
  }

  handleClick (e) {
    this.props.onClick(this.props.index);
  }
}
