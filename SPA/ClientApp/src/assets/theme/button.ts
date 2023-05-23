import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { Color } from './themeEnum';

const green = defineStyle({
  backgroundColor: Color.green,
  _hover: {
    backgroundColor: Color.green_hover,
  },
  _active: {
    backgroundColor: Color.green_hover,
  },
});

const red = defineStyle({
  backgroundColor: Color.red,
  _hover: {
    backgroundColor: Color.red_hover,
  },
  _active: {
    backgroundColor: Color.red_hover,
  },
});

const blue100 = defineStyle({
  backgroundColor: Color.blue100,
  color: Color.blue300,
  _hover: {
    backgroundColor: Color.blue100_hover,
  },
  _active: {
    backgroundColor: Color.blue100_hover,
  },
});

const blue200 = defineStyle({
  backgroundColor: Color.blue200,
  _hover: {
    backgroundColor: Color.blue200_hover,
  },
  _active: {
    backgroundColor: Color.blue200_hover,
  },
});

const blue300 = defineStyle({
  backgroundColor: Color.blue300,
  _hover: {
    backgroundColor: Color.blue300_hover,
  },
  _active: {
    backgroundColor: Color.blue300_hover,
  },
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
