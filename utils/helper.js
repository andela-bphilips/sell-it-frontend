export const numberWithCommas = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const camelCaseToUnderscore = str =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase();

export const jsUcFirst = (str) => {
  str = str.toLowerCase();
  const newString = str.charAt(0).toUpperCase() + str.slice(1);
  return newString;
};
