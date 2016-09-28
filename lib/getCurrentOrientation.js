// @flow

import Orientation from 'react-native-orientation-listener';

let _currentOrientation = 'portrait';

export default function getCurrentOrientation(): string {
  return _currentOrientation;
}

const updateCurrentOrientation = (orientation: string): void => {
  _currentOrientation = orientation === 'PORTRAIT' ? 'portrait' : 'landscape';
};

Orientation.getOrientation(updateCurrentOrientation);

Orientation.addListener(({ orientation }) => updateCurrentOrientation(orientation));
