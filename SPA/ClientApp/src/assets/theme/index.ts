import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { textVariants } from './textVariants';

const theme = extendTheme({
  colors,
  components: {
    ...textVariants,
  },
});
export default theme;
