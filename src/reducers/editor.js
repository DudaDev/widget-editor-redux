import { createReducer } from 'utils';

const TOGGLE_EDITOR_STATE = 'TOGGLE_EDITOR_STATE';
const TOGGLE_SECTION_STATE = 'TOGGLE_SECTION_STATE';
const SELECT_TAB = 'SELECT_TAB';

const initialState = {
  isOpen : true,
  title: 'Widget Editor',
  sections: [{
    title: 'Settings',
    collapsed: false,
    components: [{
      id: 'SettingsComponent#1',
      type: 'input',
      label: 'Title',
      onChange (e) {}
    }, {
      id: 'SettingsComponent#2',
      type: 'input',
      label: 'Name'
    }, {
      id: 'SettingsComponent#3',
      type: 'input',
      label: 'Other Stuff'
    }]
  }, {
    title: 'Design',
    collapsed: true,
    components: [{
      id: 'DesignComponent#4',
      type: 'input',
      label: 'Title'
    }]
  }, {
    title: 'Advanced',
    collapsed: true,
    components: [{
      id: 'DesignComponent#4',
      type: 'input',
      label: 'Title'
    }]
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
