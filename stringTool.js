
snakeCase = function (str) {
  return str.replace(/([^A-Z])([A-Z])/g, function ($0, $1, $2) {
    return $1 + '_' + $2.toLowerCase();
  });
};
camelCase = function (str) {
  if (str.indexOf('_') > -1) {
    str = str.replace(/_(\w)/g, function ($0, $1) {
      return $1.toUpperCase();
    });
  }
  return str;
};