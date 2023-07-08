const plugin = require("tailwindcss/plugin");
const PREFIX = "outlined";

const generateColors = (e, colors, prefix) =>
  Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === "string") {
      return {
        ...acc,
        [`${prefix}-${e(key)}`]: {
          borderWidth: "1px",
          borderColor: colors[key],
          color: colors[key],
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
