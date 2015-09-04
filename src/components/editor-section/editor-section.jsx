import React from 'react';
import SectionTitle from '../editor-section-title/editor-section-title'

import InputComponent from
  '../editor-components/input-component/input-component';
import SliderComponent from
  '../editor-components/slider-component/slider-component';

import './editor-section.scss'

export default class EditorSection extends React.Component {

  constructor (props) {
    super(props);
    this.state = { collapsed: this.props.section.collapsed };
  }

  render () {
    const section = this.props.section;
    const sectionClassName = this.getSectionClassName();
    const components = section.components.map((component, i) => {
      switch (component.type) {
        case 'input':
          return <InputComponent
          key={i}
          component={component} />
        case 'slider':
          return <SliderComponent
          key={i}
          component={component} />
      }
    });

    return (
      <div className={sectionClassName}>
        <SectionTitle title={section.title}
          handleClick={e => this.onToggle(e)}
          collapsed={this.state.collapsed} />
        <div className="EditorSection-components">
          { components }
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
