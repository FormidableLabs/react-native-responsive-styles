// @flow

import isResponsive from './isResponsive';

type StyleDefinition = number | void | {
  [key: string]: {}
}

export default function getStyleByOrientation(
  style: StyleDefinition,
  orientation: string
): StyleDefinition {

  if (!style || typeof style === 'number' || !isResponsive(style)) {
    return style;
  }

  //eslint-disable-next-line no-unused-vars
  const { landscape, portrait, ...rest } = style;
  const activeStyle = style[orientation];

  if (typeof activeStyle === 'object') {
    return { ...rest, ...activeStyle };
  } else {
    return rest;
  }
}
