import React from 'react';
import './editor-section-title.scss'

export default class EditorSectionTitle extends React.Component {

  render () {
    const sctionTitleIcon = this.getSectionTitleIcon();

    return (
      <h3 className='EditorSectionTitle'
        onClick={e => this.props.toggleSection(e)}>
        <span>{this.props.title}</span>
        <span className={sctionTitleIcon}></span>
      </h3>
    );
  }

  getSectionTitleIcon () {
    if (this.props.collapsed) {
      return 'glyphicon glyphicon-menu-down';
    } else {
      return 'glyphicon glyphicon-menu-up';
    }
  }
}

EditorSectionTitle.propTypes = {
  handleClick: React.PropTypes.func,
  title: React.PropTypes.string,
  collapsed: React.PropTypes.bool
};

EditorSectionTitle.defaultProps = {
  handleClick: () => {},
  title: 'Section Title',
  collapsed: true
};
