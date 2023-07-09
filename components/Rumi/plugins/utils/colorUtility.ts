const OPACITY_VARIATIONS_ARRAY = [
  0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
];

export type ColorValueHex = `#${string}`;
export interface callbackDTO {
  value: string;
  rgb?: Array<number>;
  opacity?: number;
}
export type ColorClassCallback = (colorDTO: callbackDTO) => object;

const hexToRGB = (hex: string) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = ("0x" + c.join("")) as unknown;
    return [
      ((c as number) >> 16) & 255,
      ((c as number) >> 8) & 255,
      (c as number) & 255,
    ];
  }
  return null;
};

export class ColorUtility {
  className: string;
  colorValue: string;
  colorRGB?: Array<number>;
  getRulesCallback: colorClassCallback;

  constructor(
    className: string,
    colorValue: string,
    getRulesCallback: colorClassCallback
  ) {
    this.className = className;
    this.colorValue = colorValue;
    this.colorRGB = hexToRGB(colorValue) || undefined;
    this.getRulesCallback = getRulesCallback;
  }

  hasHexColor() {
    return Array.isArray(this.colorRGB);
  }

  executeOpacityCallback(opacity: number) {
    return this.getRulesCallback({
      value: this.colorValue,
      rgb: this.colorRGB,
      opacity,
    });
  }

  getOpacityClass(opacity: number) {
    const finalclassName = `${this.className}\\/${opacity}`;
    return {
      [finalclassName]: this.executeOpacityCallback(opacity),
    };
  }

  getColorClass() {
    return {
      [this.className]: this.executeOpacityCallback(100),
    };
  }

  geOpacityClasses() {
    return OPACITY_VARIATIONS_ARRAY.reduce((acc, key) => {
      return {
        ...acc,
        ...this.getOpacityClass(key),
      };
    }, {});
  }
}
