import * as React from 'react';
import ContactsPopoverButton from './ContactsPopoverButton';
import { BookLessonButton } from './BookLessonButton';
import { Flex } from '@chakra-ui/react';

export const ButtonSection: React.FC = () => {
  return (
    <Flex w="100%" gap="16px" flexWrap="wrap">
      <ContactsPopoverButton />
      <BookLessonButton />
    </Flex>
  );
};
