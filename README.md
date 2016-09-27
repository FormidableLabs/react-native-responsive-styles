# react-native-responsive-styles

React Native styles that respond to orientation change.

Simply import `StyleSheet` and React components from `react-native-responsive-styles` instead of `react-native`
```
import {
  View,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native-responsive-styles';
```

You can then define custom style properties to `landscape` and `portrait`:
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    portrait: {
      flexDirection: 'column'
    },
    landscape: {
      flexDirection: 'row'
    }
  },
  mainContent: {
    flex: 8,
    landscape: {
      flex: 1 // override default value
    }
  },
  secondaryContent: {
    portrait: {
      backgroundColor: '#ccc'
    }
  }
});
```

![Demo](/docs/responsive-styles.gif)

### Please note

This project is in a pre-pre-pre-release state. One day it may be in a release state.
