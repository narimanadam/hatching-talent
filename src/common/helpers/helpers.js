export const isEmptyObject = targetObject =>
  Object.keys(targetObject).length === 0;

export const toPascalCase = str =>
  str
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function(str) {
      return str.toUpperCase();
    });
