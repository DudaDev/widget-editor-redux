import React from 'react';
import LabelComponent from '../editor-components/label-component';
import InputComponent from '../editor-components/input-component';
import SliderComponent from '../editor-components/slider-component';
import TextareaComponent from '../editor-components/textarea-component';
import './component-bundler.scss'

export default class ComponentBundler extends React.Component {

  render () {
    const components = this.props.components.map((component, i) => {
      return this.bundleComponent(component, i);
    });

    return (
      <div>
        { components }
      </div>
    );
  }

  bundleComponent (component, i) {
    let editorComponent;

    switch (component.type) {
      case 'input':
        editorComponent = <InputComponent {...component}
          key={component.id} />
        break;
      case 'slider':
        editorComponent = <SliderComponent {...component}
          key={component.id} />
        break;
      case 'textarea':
        editorComponent = <TextareaComponent {...component}
          key={component.id} />
        break;
    }

    if ('label' in component) {
      return (
        <div type={component.type} key={i} className="ComponentBundler">
          <LabelComponent {...component.label} />
          { editorComponent }
        </div>
      );
    }

    return (
      <div type={component.type} key={i} className="EditorComponent">
        { editorComponent }
      </div>
    );
  }
}


ComponentBundler.propTypes = {
  components: React.PropTypes.array
};

ComponentBundler.defaultProps = {
  components: []
};
