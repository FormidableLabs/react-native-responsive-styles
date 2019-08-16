<h1 align="center">react-native-responsive-styles</h1>

<p align="center">
  <a title='License' href="https://raw.githubusercontent.com/FormidableLabs/react-native-responsive-styles/master/LICENSE">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a href="https://badge.fury.io/js/react-native-responsive-styles">
    <img src="https://badge.fury.io/js/react-native-responsive-styles.svg" alt="npm version" height="18">
  </a>
  <img src='https://img.shields.io/badge/android-supported-brightgreen.svg' />
  <img src='https://img.shields.io/badge/iOS-supported-brightgreen.svg' />
   <a href="https://github.com/FormidableLabs/react-native-responsive-styles#maintenance-status">
    <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-archived-red.svg" />
  </a>
</p>

<h4 align="center">
  React Native styles that respond to device orientation change
</h4>

***

### How-to

Installation:
```
npm i --save react-native-responsive-styles
```

This library depends on [walmartlabs/react-native-orientation-listener](https://github.com/walmartlabs/react-native-orientation-listener), which contains native dependencies for iOS and Android. Link them with:
```
react-native link react-native-orientation-listener
```

You can now import `StyleSheet` and any React components from `react-native-responsive-styles` instead of `react-native`:
```js
import {
  View,
  Image,
  ScrollView,
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

Usage of `StyleSheet.create` is not required. Plain style objects will work as well, as long as you use the React components from this package.

That's it!

### Demo
![Demo](/docs/responsive-styles.gif)

### Advanced features

#### Animate transitions

You can apply a [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation.html) to orientation changes. Valid animation values are `spring`, `linear` and `easeInEaseOut`.
```js
StyleSheet.configureLayoutAnimation('spring');
```

The default behaviour is no animation, but configuring one is recommended to avoid visual glitches when rearranging elements.

#### Make your custom components responsive

To add support for orientation-specific styles to your own components or other third-party components, wrap them in a higher-order component with `StyleSheet.makeResponsive`:
```js
import React from 'react';
import StyleSheet from 'react-native-responsive-styles';

class CustomComponent extends React.Component({
  //...
});

export default StyleSheet.makeResponsive(CustomComponent);
```

In most cases this should not be required. You can simply nest your component in a responsive `View`.

#### Hiding elements

A common use case is to hide an element entirely in one orientation. You can use `StyleSheet.hidden` for that:
```js
const styles = StyleSheet.create({
  landscapeOnly: {
    flex: 1,
    portrait: StyleSheet.hidden
  }
})
```

### Please note

This project is in a pre-release state. The API may be considered relatively stable, but changes may still occur.

### Maintenance Status

**Archived:** This project is no longer maintained by Formidable. We are no longer responding to issues or pull requests unless they relate to security concerns. We encourage interested developers to fork this project and make it their own!

[MIT licensed](LICENSE)
