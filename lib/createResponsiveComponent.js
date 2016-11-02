// @flow

import React, { PropTypes } from 'react';
import Orientation from 'react-native-orientation-listener';

import getCurrentOrientation from './getCurrentOrientation';
import getStyleByOrientation from './getStyleByOrientation';

export default function createResponsiveComponent(ComponentClass: ReactClass<any>) {
  if (!ComponentClass) return;
  let _componentRef = null;
  return React.createClass({
    displayName: `Responsive${ComponentClass.displayName}`,
    propTypes: {
      children: PropTypes.node,
      style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.number
      ])
    },
    getInitialState() {
      return {
        orientation: getCurrentOrientation()
      };
    },

    componentDidMount() {
      Orientation.addListener(this._setOrientation);
    },

    componentWillUnmount() {
      Orientation.removeListener(this._setOrientation);
    },

    _setOrientation({ orientation }) {
      this.setState({
        orientation: orientation === 'PORTRAIT' ? 'portrait' : 'landscape'
      });
    },

    getComponentRef() {
        return _componentRef;
    },

    _setComponentRef(componentRef) {
        _componentRef = componentRef;
    },

    render() {
      const orientation = this.state.orientation;
      const { style, children, ...props } = this.props;

      const getStyle = (styleObj) => getStyleByOrientation(styleObj, orientation);

      const resolvedStyle = Array.isArray(style)
        ? style.map(getStyle)
        : getStyle(style);

      return (
        <ComponentClass style={resolvedStyle} {...props} ref={this._setComponentRef}>
          {children}
        </ComponentClass>
      );
    }
  });
}
