# react-native-responsive-styles

React Native styles that respond to orientation change.

### How-to

For the time being, install straight from GitHub
```
npm i --save https://github.com/FormidableLabs/react-native-responsive-styles
```

Simply import `StyleSheet` and any React components from `react-native-responsive-styles` instead of `react-native`
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

To add support for orientation-specific styles to your own components or other third-party components, wrap them in a higher-order component with `makeResponsive`:
```js
import React from 'react';
import { makeResponsive } from 'react-native-responsive-styles';

class CustomComponent extends React.Component({
  //...
});

export default makeResponsive(CustomComponent);
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

[MIT licensed](LICENSE)
