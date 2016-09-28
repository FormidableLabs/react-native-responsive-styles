// @flow

import { StyleSheet } from 'react-native';
import type { StyleSheet as StyleSheetType } from 'react-native/Libraries/StyleSheet/StyleSheet';
import isResponsive from './isResponsive';

export default function createResponsiveStylesheet(styles: {}): StyleSheetType<*> {
  const standard = {};
  const responsive = {};

  for (const styleName in styles) {
    if (styles.hasOwnProperty(styleName)) {
      const style = styles[styleName];
      if (isResponsive(style)) {
        responsive[styleName] = style;
      } else {
        standard[styleName] = style;
      }
    }
  }

  return {
    ...StyleSheet.create(standard),
    ...responsive
  };
}
