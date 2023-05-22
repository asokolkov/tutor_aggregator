import * as React from 'react';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import { ChatIcon, LockIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { SlotContext } from '../../../contexts/SlotContext';
import { BookLessonModal } from './modals/BookLessonModal';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { CancelLessonModal } from './modals/CancelLessonModal';

export const ButtonGroupStudent: React.FC = () => {
  const { isBooked, student } = useContext(SlotContext);
  const bookDisclosure = useDisclosure();
  const cancelDisclosure = useDisclosure();
  const { user } = useContext(UserContext);

  const isBookedByCurrent = user?.id === student?.id;

  const renderButton = () => {
    if (isBookedByCurrent)
      return (
        <Button
          rightIcon={<ChatIcon />}
          w="100%"
          h="30px"
          variant="red"
          onClick={cancelDisclosure.onOpen}
        >
          Отменить запись
        </Button>
      );

    if (isBooked)
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
