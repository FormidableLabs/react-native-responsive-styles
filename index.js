// @flow

import ReactNative from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';

import configureLayoutAnimation from './lib/configureLayoutAnimation';
import createResponsiveComponent from './lib/createResponsiveComponent';
import createResponsiveStyleSheet from './lib/createResponsiveStyleSheet';

const wrap = createResponsiveComponent;

module.exports = {

  // wrap native components

  ActivityIndicator: wrap(ReactNative.ActivityIndicator),
  ActivityIndicatorIOS: wrap(ReactNative.ActivityIndicatorIOS), // To support older RN
  ART: wrap(ReactNative.ART),
  Button: wrap(ReactNative.Button),
  DatePickerIOS: wrap(ReactNative.DatePickerIOS),
  DrawerLayoutAndroid: wrap(ReactNative.DrawerLayoutAndroid),
  Image: wrap(ReactNative.Image),
  ImageEditor: wrap(ReactNative.ImageEditor),
  ImageStore: wrap(ReactNative.ImageStore),
  KeyboardAvoidingView: wrap(ReactNative.KeyboardAvoidingView),
  ListView: wrap(ReactNative.ListView),
  MapView: wrap(ReactNative.MapView),
  Modal: wrap(ReactNative.Modal),
  Navigator: wrap(Navigator),
  NavigatorIOS: wrap(ReactNative.NavigatorIOS),
  Picker: wrap(ReactNative.Picker),
  PickerIOS: wrap(ReactNative.PickerIOS),
  ProgressBarAndroid: wrap(ReactNative.ProgressBarAndroid),
  ProgressViewIOS: wrap(ReactNative.ProgressViewIOS),
  ScrollView: wrap(ReactNative.ScrollView),
  SegmentedControlIOS: wrap(ReactNative.SegmentedControlIOS),
  Slider: wrap(ReactNative.Slider),
  SliderIOS: wrap(ReactNative.SliderIOS), // To support older RN
  SnapshotViewIOS: wrap(ReactNative.SnapshotViewIOS),
  Switch: wrap(ReactNative.Switch),
  RecyclerViewBackedScrollView: wrap(ReactNative.RecyclerViewBackedScrollView),
  RefreshControl: wrap(ReactNative.RefreshControl),
  StatusBar: wrap(ReactNative.StatusBar),
  SwipeableListView: wrap(ReactNative.SwipeableListView),
  SwitchAndroid: wrap(ReactNative.SwitchAndroid), // To support older RN
  SwitchIOS: wrap(ReactNative.SwitchIOS), // To support older RN
  TabBarIOS: wrap(ReactNative.TabBarIOS),
  Text: wrap(ReactNative.Text),
  TextInput: wrap(ReactNative.TextInput),
  ToastAndroid: wrap(ReactNative.ToastAndroid),
  ToolbarAndroid: wrap(ReactNative.ToolbarAndroid),
  Touchable: wrap(ReactNative.Touchable),
  TouchableHighlight: wrap(ReactNative.TouchableHighlight),
  TouchableNativeFeedback: wrap(ReactNative.TouchableNativeFeedback),
  TouchableOpacity: wrap(ReactNative.TouchableOpacity),
  TouchableWithoutFeedback: wrap(ReactNative.TouchableWithoutFeedback),
  View: wrap(ReactNative.View),
  ViewPagerAndroid: wrap(ReactNative.ViewPagerAndroid),
  WebView: wrap(ReactNative.WebView),

  // extend default StyleSheet module

  StyleSheet: {

    ...ReactNative.StyleSheet,

    /**
     * override StyleSheet.create({...}) to support
     * custom `landscape` and `portrait` keys
     */
    create: createResponsiveStyleSheet,

    /**
     * Expose a method for making custom responsive components
     *
     * class CustomComponent extends React.Component { ... }
     * export default StyleSheet.makeResponsive(CustomComponent)
     */
    makeResponsive: createResponsiveComponent,

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
  }
};
