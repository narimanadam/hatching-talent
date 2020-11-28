export const isEmptyObject = targetObject =>
  Object.keys(targetObject).length === 0;

export const toPascalCase = str =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, function(str) {
    return str.toUpperCase();
  });

export const generateSocialIcon = socialLink => {
  let websiteName = socialLink
    .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
    .split("/")[0];
  return websiteName.split(".com")[0];
};

export const isObjectPropsEmpty = obj => {
  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== "") return false;
  }
  return true;
};
