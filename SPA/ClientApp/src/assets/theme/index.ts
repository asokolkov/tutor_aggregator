import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { textVariants } from './textVariants';
import { buttonTheme } from './button';

const theme = extendTheme({
  colors,
  components: {
    Text: textVariants,
    Heading: textVariants,
    Button: buttonTheme,
  },
});
export default theme;
