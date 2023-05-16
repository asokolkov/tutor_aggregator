import * as React from 'react';
import ContactsPopoverButton from './ContactsPopoverButton';
import { BookLessonButton } from './BookLessonButton';
import { HStack } from '@chakra-ui/react';

export const ButtonSection: React.FC = () => {
  return (
    <HStack w="100%" spacing="16px">
      <ContactsPopoverButton />
      <BookLessonButton />
    </HStack>
  );
};
