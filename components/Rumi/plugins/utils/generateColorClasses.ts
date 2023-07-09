import { type ColorClassCallback, ColorUtility } from "./colorUtility";
type ColorCollection = Record<string, string | unknown>;

/**
 * Generate a list of classes with all possible
 * colors variations configured in tailwind
 *
 * @param colors ColorCollection
 * @param prefix string
 * @param colorClassCallback () => object
 * @returns
 */
const generateColorClasses = (
  colors: ColorCollection,
  prefix: string,
  colorClassCallback: ColorClassCallback
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
          currentColor as ColorCollection,
          className,
          colorClassCallback
        ),
      };
    }
    /**
     * generate current color class.
     */
    const colorUtility = new ColorUtility(
      className,
      currentColor as string,
      colorClassCallback
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
