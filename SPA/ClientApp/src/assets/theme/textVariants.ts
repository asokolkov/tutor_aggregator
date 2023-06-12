import { buttonTextVariant } from './button';
import './styles.css';

export const textVariants = {
  baseStyle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '130%',
  },
  variants: {
    'regular.bold': {
      fontSize: '18px',
      fontWeight: 'semibold',
      lineHeight: '130%',
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
      fontSize: '20px',
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
      fontSize: '14px',
      lineHeight: '120%',
      textDecoration: 'underline',
    },
    'misc.small-button': {
      fontSize: '16px',
      fontWeight: 'semibold',
      lineHeight: '150%',
    },

    'brand.logo': {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: '120%',
    },
    'brand.h1': {
      fontFamily: "'PT Sans', sans-serif",
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '110%',
    },
  },
};
