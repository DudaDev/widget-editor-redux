import { createReducer } from 'utils';

const TOGGLE_EDITOR_STATE = 'TOGGLE_EDITOR_STATE';
const TOGGLE_SECTION_STATE = 'TOGGLE_SECTION_STATE';
const SELECT_TAB = 'SELECT_TAB';

const initialState = {
  isOpen : false,
  title: 'Widget Editor',
  sections: [{
    title: 'Settings',
    collapsed: true,
    components: [{
      id: 'SettingsComponent#1',
      type: 'input',
      placeholder: 'Placeholder',
      label: {
        id: 'SettingsComponent#1',
        text: 'Title',
        layout: 'Row'
      }
    }, {
      id: 'SettingsComponent#3',
      type: 'textarea',
      placeholder: 'Placeholder',
      label: {
        id: 'SettingsComponent#3',
        text: 'Other Stuff'
      }
    }, {
      id: 'SettingsComponent#2',
      type: 'slider',
      label: {
        id: 'SettingsComponent#2',
        text: 'Slider',
        linkLabel: false
      }
    }]
  }, {
    title: 'Design',
    collapsed: true,
    components: []
  }, {
    title: 'Advanced',
    collapsed: true,
    components: []
  }]
};

export default createReducer(initialState, {
  [TOGGLE_EDITOR_STATE] : (state) => {
    return { ...state, isOpen : !state.isOpen };
  },
  [TOGGLE_SECTION_STATE] : (state) => {
    return { ...state, isOpen : !state.collapsed };
  }
});
