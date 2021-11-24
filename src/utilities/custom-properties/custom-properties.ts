import {config} from '@shopify/polaris-tokens/dist-modern/configs/base';

function toCssCustomPropertySyntax(camelCase: string) {
  return `--p-${camelCase.replace(/([A-Z]|[0-9]+)/g, '-$1').toLowerCase()}`;
}

export const nonDesignLangaugeCustomProperties = [
  '--global-ribbon-height',
  '--top-bar-background',
  '--Polaris-RangeSlider-progress-lower',
  '--Polaris-RangeSlider-progress-upper',
  '--Polaris-RangeSlider-progress',
  '--Polaris-RangeSlider-output-factor',
  '--top-bar-color',
  '--top-bar-background-lighter',
  '--top-bar-background-darker',
  '--top-bar-border',
  '--p-frame-offset',
  '--p-checkbox-offset',
  '--p-scroll-bar-content-width',
];

export const designLangaugeCustomProperties = ([] as string[]).concat(
  ...Object.values(config).map((variant) =>
    variant.map(({name}) => toCssCustomPropertySyntax(name)),
  ),
);
