import * as React from 'react';
import ContactsPopoverButton from './ContactsPopoverButton';
import { BookLessonButton } from './BookLessonButton';

export const ButtonSection: React.FC = () => {
  return (
    <>
      <ContactsPopoverButton />
      <BookLessonButton />
    </>
  );
};
