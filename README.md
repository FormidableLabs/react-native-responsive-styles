# react-native-responsive-styles

React Native styles that respond to orientation change.

Simply import `StyleSheet` and any React components from `react-native-responsive-styles` instead of `react-native`
```js
import {
  View,
  Image,
  StyleSheet
} from 'react-native-responsive-styles';
```

You can then define custom style properties for `landscape` and `portrait` orientations:
```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // define separate styles for portrait and landscape
    portrait: {
      flexDirection: 'column'
    },
    landscape: {
      flexDirection: 'row'
    }
  },
  mainContent: {
    flex: 8,
    // override a default value when orientation is landscape
    landscape: {
      flex: 1
    }
  },
  secondaryContent: {
    flex: 1,
    // override a default value when orientation is portrait
    portrait: {
      backgroundColor: '#ccc'
    }
  }
});
```

### Demo
![Demo](/docs/responsive-styles.gif)

### Please note

This project is in a pre-pre-**pre**-release state. One day it may be in a release state.
