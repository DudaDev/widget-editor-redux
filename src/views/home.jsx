import React from 'react';
import { connect } from 'react-redux';
import Toggler from '../components/editor-toggler/editor-toggler';
import WidgetEditor from '../components/widget-editor/widget-editor';

@connect(state => ({
  editor : state.editor
}))
export default class HomeView extends React.Component {
  constructor () {
    super();
  }

  render () {
    const action = {
      type: 'TOGGLE_EDITOR_STATE',
      isOpen: this.props.editor.isOpen
    };

    return (
      <div className='view view--home container'>
        <Toggler isOpen={action.isOpen}
          onClick={e => this.props.dispatch(action)} />
        <WidgetEditor editor={this.props.editor}  />
      </div>
    );
  }
}

HomeView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  editor: React.PropTypes.object.isRequired
};

HomeView.defaultProps = {
  dispatch: () => {},
  editor: {}
};
