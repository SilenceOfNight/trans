export const prop = (propName, defaultValue, range) => ({
  [propName]: propValue = defaultValue,
}) => {
  if (range && !range.includes(propValue)) {
    return defaultValue;
  }

  return propValue;
};

export const ellipsis = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
};
