// @flow

import Orientation from 'react-native-orientation-listener';
import { LayoutAnimation } from 'react-native';

let _animate = null;

Orientation.addListener(() => {
  if (_animate) {
    _animate();
  }
});

export default function configureLayoutAnimation(animation: string | () => void): void {
  _animate = typeof animation === 'function'
    ? animation
    : LayoutAnimation[animation];
}
