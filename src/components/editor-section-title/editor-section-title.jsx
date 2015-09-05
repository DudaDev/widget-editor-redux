import React from 'react';
import './editor-section-title.scss'

export default class EditorSectionTitle extends React.Component {

  render () {
    const props = this.props;
    const sctionTitleIcon = this.getSectionTitleIcon();

    return (
      <h3 className='EditorSection-title'
        onClick={e => props.handleClick(e)}>
        <span>{props.title}</span>
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
  title: React.PropTypes.string
};

EditorSectionTitle.defaultProps = {
  editor: {
    handleClick: () => {},
    title: 'Section Title'
  }
};
