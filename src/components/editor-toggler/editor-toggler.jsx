import React from 'react';
import './editor-toggler.scss'

export default class Toggler extends React.Component {
	render () {
    const togglerClassName = this.getTogglerClassName();

    return (
			<a className={togglerClassName}
        onClick={e => this.handleClick(e)}
        href="#">
        <div></div>
      </a>
		);
  }

  handleClick (e) {
    e.stopPropagation();
    this.props.onClick(e);
  }

  getTogglerClassName () {
    var cn = 'nav-icon'

    if (this.props.isOpen) {
      return cn + ' Toggler active';
    } else {
      return cn + ' Toggler';
    }
  }
}

Toggler.propTypes = {
  isOpen: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired
};

Toggler.defaultProps = {
  isOpen: false
};
