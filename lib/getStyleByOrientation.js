import isResponsive from './isResponsive';

export default function getStyleByOrientation(style, orientation) {
  if (!isResponsive(style)) {
    return style;
  }

  //eslint-disable-next-line no-unused-vars
  const { landscape, portrait, ...common } = style;
  return {
    ...common,
    ...style[orientation]
  };
}
