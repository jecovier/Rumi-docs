const plugin = require("tailwindcss/plugin");
const PREFIX = "solid";

const generateColors = (e, colors, prefix) =>
  Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === "string") {
      return {
        ...acc,
        [`${prefix}-${e(key)}`]: {
          borderColor: colors[key],
          background: colors[key],
        },
      };
    }

    const innerColors = generateColors(e, colors[key], `${prefix}-${e(key)}`);

    return {
      ...acc,
      ...innerColors,
    };
  }, {});

module.exports = plugin.withOptions(({ className = PREFIX } = {}) => {
  return ({ e, addUtilities, theme, variants }) => {
    const colors = theme("colors");
    const newClasses = generateColors(e, colors, `.${className}`);
    addUtilities(newClasses, variants(PREFIX));
  };
});
