import * as React from 'react';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { SlotContext } from '../../../contexts/SlotContext';
import { BookLessonModal } from '../../TutorBook/modals/BookLessonModal';
import { UserContext } from '../../../contexts/UserContext';

export const ButtonGroupStudent: React.FC = () => {
  const { isBooked } = useContext(SlotContext);
  const disclosure = useDisclosure();
  const { user } = useContext(UserContext);

  // TODO: slot student id;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isBookedByCurrent = user.id === '';

  return (
    <>
      <HStack w="100%" p="8px" spacing="4px">
        {!isBooked ? (
          <Button
            rightIcon={<ChatIcon />}
            w="100%"
            bg="green.200"
            color="white"
            onClick={disclosure.onOpen}
          >
            Записаться
          </Button>
        ) : (
          <Button w="100%" bg="gray.300" color="white">
            Слот уже занят
          </Button>
        )}
      </HStack>
      <BookLessonModal disclosure={disclosure} />
    </>
  );
};
