import React from 'react';
import { connect } from 'react-redux';
import Toggler from '../components/editor-toggler/editor-toggler';
import WidgetEditor from '../components/widget-editor/widget-editor';

@connect(state => ({
  editor : state.editor
}))
export default class HomeView extends React.Component {
  render () {
    const action = {
      type: 'TOGGLE_EDITOR_STATE',
      payload: {
        isOpen: !this.props.editor.isOpen
      }
    };

    return (
      <div className='view view--home container'>
        <Toggler isOpen={this.props.editor.isOpen}
          onClick={e => this.props.dispatch(action)} />
        <WidgetEditor {...this.props.editor}  />
      </div>
    );
  }
}
