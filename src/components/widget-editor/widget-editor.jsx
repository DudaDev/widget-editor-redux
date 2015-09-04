import React from 'react';
import { connect } from 'react-redux';
import Tab from '../editor-tab/editor-tab';
import EditorSection from '../editor-section/editor-section';
import './widget-editor.scss'

export default class WidgetEditor extends React.Component {
	render () {
    const editor = this.props.editor;
    const clsNm = editor.isOpen ? 'WidgetEditor open' : 'WidgetEditor';
    const sections = editor.sections.map((section, i) => {
      return <EditorSection key={i}
        section={section} />
    });

    return (
      <div className={clsNm}>
        <h1 className="WidgetEditor-title">{ editor.title }</h1>
        { sections }
      </div>
    );
  }
}

WidgetEditor.propTypes = {
  editor: React.PropTypes.shape({
    sections: React.PropTypes.array,
    title: React.PropTypes.string
  })
};

WidgetEditor.defaultProps = {
  editor: {
    sections: [],
    title: 'Widget Editor'
  }
};
