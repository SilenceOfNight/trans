export const is = (type, object) => {
  if (!object) {
    return object => is(type, object);
  }

  return Object.prototype.toString.call(object) === `[object ${type}]`;
};

export const isArray = is('Array');
export const isBoolean = is('Boolean');
export const isFunction = is('Function');
export const isNull = is('Null');
export const isNumber = is('Number');
export const isObject = is('Object');
export const isString = is('String');
export const isSymbol = is('Symbol');
export const isUndefined = is('Undefined');
