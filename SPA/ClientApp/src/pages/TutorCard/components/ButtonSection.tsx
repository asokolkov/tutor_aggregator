import * as React from 'react';
import ContactsPopoverButton from './ContactsPopoverButton';
import { BookLessonButton } from './BookLessonButton';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

export const ButtonSection: React.FC = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Flex
      margin={'20px 0 0 0'}
      width={isLargerThanTablet ? '70%' : '100%'}
      maxWidth={'1000px'}
      gap="10px"
      flexWrap="wrap"
    >
      <ContactsPopoverButton />
      <BookLessonButton />
    </Flex>
  );
};
