import * as React from 'react';
import { useContext } from 'react';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import { ChatIcon, LockIcon } from '@chakra-ui/icons';
import { SlotContext } from '../contexts/SlotContext';
import { BookLessonModal } from '../modals/BookLessonModal';
import { CancelLessonModal } from '../modals/CancelLessonModal';
import { BookedBy } from '../Slot';

export const StudentCalendar: React.FC = () => {
  const { bookedBy } = useContext(SlotContext);
  const bookDisclosure = useDisclosure();
  const cancelDisclosure = useDisclosure();
  const renderButton = () => {
    if (bookedBy === BookedBy.current)
      return (
        <Button
          rightIcon={<ChatIcon />}
          flexGrow="1"
          h="30px"
          variant="red"
          onClick={cancelDisclosure.onOpen}
        >
          Отменить запись
        </Button>
      );

    if (bookedBy != BookedBy.nobody)
      return (
        <Button w="100%" h="30px" variant="blue.200" rightIcon={<LockIcon />}>
          Слот занят
        </Button>
      );

    return (
      <Button
        rightIcon={<ChatIcon />}
        w="100%"
        h="30px"
        variant="green"
        onClick={bookDisclosure.onOpen}
      >
        Записаться
      </Button>
    );
  };

  return (
    <>
      <HStack w="100%" p="8px" spacing="4px">
        {renderButton()}
      </HStack>
      <BookLessonModal disclosure={bookDisclosure} />
      <CancelLessonModal disclosure={cancelDisclosure} />
    </>
  );
};
