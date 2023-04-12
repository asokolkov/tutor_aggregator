import * as React from 'react';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { SlotContext } from '../../../contexts/SlotContext';
import { BookLessonModal } from '../../TutorBook/modals/BookLessonModal';
import { UserContext } from '../../../contexts/UserContext';
import { CancelLessonModal } from '../../TutorBook/modals/CancelLessonModal';

export const ButtonGroupStudent: React.FC = () => {
  const { isBooked, lesson } = useContext(SlotContext);
  const bookDisclosure = useDisclosure();
  const cancelDisclosure = useDisclosure();
  const { user } = useContext(UserContext);

  const isBookedByCurrent = user.id === lesson.student?.id;

  const renderButton = () => {
    if (isBookedByCurrent)
      return (
        <Button
          rightIcon={<ChatIcon />}
          w="100%"
          bg="red"
          color="white"
          onClick={cancelDisclosure.onOpen}
        >
          Отменить запись
        </Button>
      );

    if (isBooked)
      return (
        <Button w="100%" bg="gray.300" color="white">
          Слот уже занят
        </Button>
      );

    return (
      <Button
        rightIcon={<ChatIcon />}
        w="100%"
        bg="green.200"
        color="white"
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
