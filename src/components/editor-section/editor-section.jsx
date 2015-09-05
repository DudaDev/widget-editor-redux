import React from 'react';
import SectionTitle from '../editor-section-title/editor-section-title'
import ComponentBundler from '../component-bundler/component-bundler'
import './editor-section.scss'


export default class EditorSection extends React.Component {

  constructor (props) {
    super(props);
    this.state = { collapsed: this.props.section.collapsed };
  }

  render () {
    const section = this.props.section;
    const sectionClassName = this.getSectionClassName();

    return (
      <div className={sectionClassName}>
        <SectionTitle title={section.title}
          handleClick={e => this.onToggle(e)}
          collapsed={this.state.collapsed} />
        <div className='EditorSection-components'>
          <ComponentBundler {...this.props.section} />
        </div>
      </div>
    );
  }

  onToggle (e) {
    this.setState({ collapsed: !this.state.collapsed });
  }

  getSectionClassName () {
    if (this.state.collapsed) {
      return 'EditorSection--collapsed';
    } else {
      return 'EditorSection';
    }
  }
}


EditorSection.propTypes = {
  components: React.PropTypes.array,
  title: React.PropTypes.string
};

EditorSection.defaultProps = {
  editor: {
    sections: [],
    title: 'Section'
  }
};
