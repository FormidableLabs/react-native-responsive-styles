// @flow

export default function isResponsive(style: void | Object | number): boolean {
  return typeof style === 'object' && (
    'landscape' in style ||
    'portrait' in style
  );
}
