import Orientation from 'react-native-orientation-listener';

let _currentOrientation = 'portrait';

export default function getCurrentOrientation() {
  return _currentOrientation;
}

const updateCurrentOrientation = (orientation) => {
  _currentOrientation = orientation === 'PORTRAIT' ? 'portrait' : 'landscape';
};

Orientation.getOrientation(updateCurrentOrientation);

Orientation.addListener(({ orientation }) => updateCurrentOrientation(orientation));
