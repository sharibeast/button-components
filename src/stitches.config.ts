import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      'blue-100': '#3D5AFE',
      'blue-200': '#2962FF',
      'blue-300': '#0039CB',
      'blue-400': 'rgba(41,98,255,0.1)',
      'red-100': '#D32F2F',
      'red-200': '#9A0007',
      'dark-100': '#3F3F3F',
      'dark-200': '#455A64',
      'dark-300': '#1C313A',
      'dark-400': '#000000',
      'neutral-100': '#FFFFFF',
      'neutral-200': '#E0E0E0',
      'neutral-300': '#AEAEAE',
      'neutral-400': '#9E9E9E',
    },
    fontSizes: {
      small: '12px',
      medium: '14px',
      large: '24px',
    },
    shadows: {
      small: '0px 2px 3px rgba(51, 51, 51, 0.2)',
      medium: '0px 2px 3px rgba(69, 900, 100, 0.2)',
      md: '0px 2px 3px rgba(211, 47, 47, 0.2)',
    },
    fontWeights: {
      light: '300',
      regular: '400',
      medium: '500',
    },
  },
  utils: {
    m: (value: number | string) => ({ margin: value }),
    p: (value: number | string) => ({ padding: value }),
    mx: (value: number | string) => ({ marginInline: value }),
  },
});
