import { h } from '@stencil/core';
export const CarbonThemeStyle = ({ style }) => {
  return (h("style", null, `
      :host ${style};
    `));
};
