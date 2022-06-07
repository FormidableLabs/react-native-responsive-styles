// @flow

import Orientation from 'react-native-orientation';

let _currentOrientation = Orientation.getInitialOrientation() || 'portrait';

export default function getCurrentOrientation(): string {
  return _currentOrientation;
}

export const parseOrientation = (orientation: string): string => {
  switch (orientation){
    case 'LANDSCAPE':
    case 'LANDSCAPE-LEFT':
    case 'LANDSCAPE-RIGHT':
      return 'landscape';
    // case 'PORTRAIT':
    // case 'UNKNOWN':
    // case 'PORTRAITUPSIDEDOWN':
    default:
      return 'portrait';
  }
};

const updateCurrentOrientation = (orientation: string): void => {
  _currentOrientation = parseOrientation(orientation);
};

Orientation.addOrientationListener(updateCurrentOrientation);
