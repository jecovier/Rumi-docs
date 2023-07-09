import { type colorClassCallback, ColorUtility } from "./colorUtility";
type colorCollection = Record<string, string | unknown>;

/**
 * Generate a list of classes with all possible
 * colors variations configured in tailwind
 *
 * @param colors colorCollection
 * @param prefix string
 * @param getRulesCallback () => object
 * @returns
 */
const generateColorClasses = (
  colors: colorCollection,
  prefix: string,
  getRulesCallback: colorClassCallback
): object => {
  return Object.keys(colors).reduce((acc: object, key: string) => {
    const className = `${prefix}-${key}`;
    const currentColor = colors[key];

    /**
     * if currentColor is an array we need to
     * recursively parse every color variation in it:
     * [primary-50, primary-100 ... primary-90]
     */
    if (typeof currentColor === "object") {
      return {
        ...acc,
        ...generateColorClasses(
          currentColor as colorCollection,
          className,
          getRulesCallback
        ),
      };
    }
    /**
     * generate current color class.
     */
    const colorUtility = new ColorUtility(
      className,
      currentColor as string,
      getRulesCallback
    );
    /**
     * If color value is not a valid HexColor, we can not
     * generate opacity variations. return current class only
     */
    if (!colorUtility.hasHexColor()) {
      return {
        ...acc,
        ...colorUtility.getColorClass(),
      };
    }

    /**
     * if color value is a HexColor it will
     * use the RGB values to generate the opacity
     * variations
     */

    return {
      ...acc,
      ...colorUtility.getColorClass(),
      ...colorUtility.geOpacityClasses(),
    };
  }, {});
};

module.exports = { generateColorClasses };
