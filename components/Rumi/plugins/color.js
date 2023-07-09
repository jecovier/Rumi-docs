import { generateColorClasses } from "./utils/generateColorClasses";
import plugin from "tailwindcss/plugin";
const CLASSNAME = "color";
const VARNAME = "--rumi-contrast-color";

const getCssRules = ({ value, rgb, opacity }) => {
  return {
    [VARNAME]: Array.isArray(rgb)
      ? `rgba(${rgb[0]} ${rgb[1]} ${rgb[2]} / ${opacity}%) !important`
      : `${value} !important`,
  };
};

module.exports = plugin.withOptions(({ className = CLASSNAME } = {}) => {
  return ({ e, addUtilities, theme, variants }) => {
    const newClasses = generateColorClasses(
      theme("colors"),
      `.${className}`,
      getCssRules
    );
    addUtilities(newClasses, variants(className));
  };
});
