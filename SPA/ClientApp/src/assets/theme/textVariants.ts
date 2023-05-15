import { buttonTextVariant } from './button';

export const textVariants = {
  baseStyle: {
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 'regular',
    lineHeight: '130%',
  },
  variants: {
    'regular.bold': {
      fontWeight: 'semibold',
      lineHeight: '150%',
    },
    'regular.h1': {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
    'regular.h2': {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '133%',
    },
    'regular.h3': {
      fontSize: '20px',
      fontWeight: 'semibold',
    },

    'misc.link': {
      fontSize: '22px',
      fontWeight: 'medium',
      lineHeight: '150%',
      textDecoration: 'underline',
    },
    'misc.field-title': {
      fontSize: '16px',
      lineHeight: '150%',
    },
    'misc.button': buttonTextVariant,
    'misc.logo-addition': {
      fontSize: '16px',
      lineHeight: '175%',
      textDecoration: 'underline',
    },
    'misc.small-button': {
      fontSize: '14px',
      fontWeight: 'semibold',
      lineHeight: '150%',
    },

    'brand.logo': {
      fontFamily: 'PT Sans',
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
    'brand.h1': {
      fontFamily: 'PT Sans',
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '120%',
    },
  },
};
