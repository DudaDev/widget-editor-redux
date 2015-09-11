import React from 'react';
import SectionTitle from '../editor-section-title/editor-section-title'
import ComponentBundler from '../component-bundler/component-bundler'
import './editor-section.scss'

export default class EditorSection extends React.Component {
  constructor (props) {
    super(props);
    this.state = { height: '' };
  }

  render () {
    const sectionClassName = this.getSectionClassName();
    const sctionStyle = this.getSectionStyle();

    return (
      <div className={sectionClassName}>
        <SectionTitle title={this.props.title}
          toggleSection={e => this.props.toggleSection(this.props.index)}
          collapsed={this.props.collapsed} />

        <div className='EditorSection-components'
          style={sctionStyle}
          ref='editorSection'>
          <ComponentBundler components={this.props.components} />
        </div>
      </div>
    );
  }

  componentDidMount () {
    const editorSection = this.refs.editorSection.getDOMNode();
    const innerHeight = editorSection.children[0].clientHeight;

    this.setState({ height: innerHeight + 'px' });
  }

  getSectionClassName () {
    if (this.props.collapsed) {
      return 'EditorSection--collapsed';
    } else {
      return 'EditorSection';
    }
  }

  getSectionStyle () {
    if (this.props.collapsed) {
      return {};
    } else {
      return { height: this.state.height };
    }
  }
}


EditorSection.propTypes = {
  title: React.PropTypes.string,
  collapsed: React.PropTypes.bool,
  components: React.PropTypes.array,
  index: React.PropTypes.number.isRequired
};

EditorSection.defaultProps = {
  title: 'Section',
  collapsed: true,
  sections: []
};
