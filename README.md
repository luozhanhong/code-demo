
snakeCase = function (str) {
  return str.replace(/([^A-Z])([A-Z])/g, function ($0, $1, $2) {
    return $1 + '_' + $2.toLowerCase();
  });
};
