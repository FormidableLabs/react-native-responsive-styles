import Orientation from 'react-native-orientation-listener';
import { LayoutAnimation } from 'react-native';

let _animate = null;

Orientation.addListener(() => {
  if (_animate) {
    _animate();
  }
});

export default function animateOrientationChange(animation) {
  _animate = typeof animation === 'function'
    ? animation
    : LayoutAnimation[animation];
}
