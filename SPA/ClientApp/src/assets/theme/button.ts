import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const green = defineStyle({
  backgroundColor: 'green',
});

const red = defineStyle({
  backgroundColor: 'red',
});

const blue100 = defineStyle({
  backgroundColor: 'blue.100',
});

const blue200 = defineStyle({
  backgroundColor: 'blue.200',
});

const blue300 = defineStyle({
  backgroundColor: 'blue.300',
});

export const buttonTextVariant = {
  fontWeight: 'semibold',
  fontFamily: 'Inter',
  lineHeight: '130%',
  fontSize: '18px',
};

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    ...buttonTextVariant,
    color: 'white',
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
