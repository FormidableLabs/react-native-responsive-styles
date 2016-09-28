// @flow

import ReactNative from 'react-native';

import configureLayoutAnimation from './lib/configureLayoutAnimation';
import createResponsiveComponent from './lib/createResponsiveComponent';
import createResponsiveStyleSheet from './lib/createResponsiveStyleSheet';

const supportedComponentTypes = [
  'ActivityIndicator',
  'ActivityIndicatorIOS',
  'ART',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'Image',
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

// generate a higher order component for each supported native component type
supportedComponentTypes.forEach((className) => {
  module.exports[className] = createResponsiveComponent(ReactNative[className]);
});

// extend default StyleSheet module
module.exports.StyleSheet = {

  ...ReactNative.StyleSheet,

  /**
   * override StyleSheet.create({...}) to support
   * custom `landscape` and `portrait` keys
   */
  create: createResponsiveStyleSheet,

  /**
   * if you want to animate the orientation change
   * transitions, call this with one of the valid
   * LayoutAnimation types: 'spring'|'easeInEaseOut'|'linear':
   *
   * StyleSheet.configureLayoutAnimation('spring')
   *
   * Alternatively acceps a function to call when
   * orientation changes
   */
  configureLayoutAnimation,

  /**
   * A convenience style to hide an element entirely, e.g.
   * StyleSheet.create({
   *  elementStyle: {
   *    portrait: StyleSheet.hidden,
   *    landscape: {flex: 1}
   *  }
   * })
   */
  hidden: {
    flex: 0,
    width: 0,
    height: 0,
    overflow: 'hidden'
  }
};

module.exports.default = module.exports;
