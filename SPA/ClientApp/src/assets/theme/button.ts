import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { Color } from './themeEnum';

const green = defineStyle({
  backgroundColor: Color.green,
});

const red = defineStyle({
  backgroundColor: Color.red,
});

const blue100 = defineStyle({
  backgroundColor: Color.blue100,
});

const blue200 = defineStyle({
  backgroundColor: Color.blue200,
});

const blue300 = defineStyle({
  backgroundColor: Color.blue300,
});

export const buttonTextVariant = {
  fontWeight: 'semibold',
  lineHeight: '130%',
  fontSize: '18px',
};

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    ...buttonTextVariant,
    color: Color.white,
  },
  variants: {
    green,
    red,
    'blue.100': blue100,
    'blue.200': blue200,
    'blue.300': blue300,
  },
  defaultProps: {
    colorScheme: 'green',
  },
});
