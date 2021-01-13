export const get = (obj: any, path: string[], defaultValue: any = undefined): any => {
  if (typeof obj !== 'object' || obj === null) {
    return defaultValue;
  }
  if (!path.length) {
    return defaultValue;
  }
  if (path.length === 1) {
    if (obj[path[0]] === undefined) {
      return defaultValue;
    }
    return obj[path[0]];
  }
  return get(obj[path[0]], path.slice(1), defaultValue);
};
