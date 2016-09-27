export default function isResponsive(obj) {
  return typeof obj === 'object' &&
    Object.keys(obj).some((propName) =>
      propName === 'landscape' ||
      propName === 'portrait'
    );
}
