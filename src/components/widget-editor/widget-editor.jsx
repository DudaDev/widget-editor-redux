import React from 'react';
import { connect } from 'react-redux';
import EditorSection from '../editor-section/editor-section';
import './widget-editor.scss'

@connect(state => ({
  editor : state.editor
}))
export default class WidgetEditor extends React.Component {
	render () {
    const clsNm = this.props.isOpen ? 'WidgetEditor open' : 'WidgetEditor';
    const sections = this.props.sections.map((section, i) => {
      return <EditorSection key={i}
        index={i}
        collapsed={section.collapsed}
        title={section.title}
        components={section.components}
        toggleSection={index => this.toggleSection(section, index)} />
    });

    return (
      <div className={clsNm}>
        <h1 className="WidgetEditor-title">{ this.props.title }</h1>
        { sections }
      </div>
    );
  }

  toggleSection (section, index) {
    this.props.dispatch({
      type: 'TOGGLE_SECTION_STATE',
      payload: {
        collapsed: !section.collapsed,
        index
      }
    });
  }
}

WidgetEditor.propTypes = {
  isOpen: React.PropTypes.bool,
  title: React.PropTypes.string,
  sections: React.PropTypes.array
};

WidgetEditor.defaultProps = {
  isOpen: false,
  title: 'Widget Editor',
  sections: []
};
