export const numberWithCommas = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const camelCaseToUnderscore = str =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase();
