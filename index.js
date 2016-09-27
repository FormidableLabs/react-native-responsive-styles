import ReactNative from 'react-native';

import animateOrientationChange from './lib/animateOrientationChange';
import createResponsiveComponent from './lib/createResponsiveComponent';
import createResponsiveStyleSheet from './lib/createResponsiveStyleSheet';

const supportedComponentTypes = [
  'ActivityIndicator',
  'ActivityIndicatorIOS',
  'ART',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'Image',
  'ImageEditor',
  'ImageStore',
  'KeyboardAvoidingView',
  'ListView',
  'MapView',
  'Modal',
  'Navigator',
  'NavigatorIOS',
  'Picker',
  'PickerIOS',
  'ProgressBarAndroid',
  'ProgressViewIOS',
  'ScrollView',
  'SegmentedControlIOS',
  'Slider',
  'SliderIOS',
  'SnapshotViewIOS',
  'Switch',
  'RecyclerViewBackedScrollView',
  'RefreshControl',
  'StatusBar',
  'SwipeableListView',
  'SwitchAndroid',
  'SwitchIOS',
  'TabBarIOS',
  'Text',
  'TextInput',
  'ToastAndroid',
  'ToolbarAndroid',
  'Touchable',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'ViewPagerAndroid',
  'WebView'
];

module.exports = {};

supportedComponentTypes.forEach((className) => {
  module.exports[className] = createResponsiveComponent(ReactNative[className]);
});

module.exports.StyleSheet = {
  ...ReactNative.StyleSheet,
  animate: animateOrientationChange,
  create: createResponsiveStyleSheet,
  hidden: {
    flex: 0,
    width: 0,
    height: 0,
    overflow: 'hidden'
  }
};

module.exports.default = module.exports;
