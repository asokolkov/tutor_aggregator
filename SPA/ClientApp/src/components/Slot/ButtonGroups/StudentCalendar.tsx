import * as React from 'react';
import { useContext } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ChatIcon, LockIcon } from '@chakra-ui/icons';
import { SlotContext } from '../contexts/SlotContext';
import { BookedBy } from '../Slot';
import { ModalContext } from '../contexts/ModalContext';
import { useDataForModal } from '../hooks/useDataForModal';

export const StudentCalendar: React.FC = () => {
  const { bookedBy } = useContext(SlotContext);
  const { setData, cancelDisc, bookDisc } = useContext(ModalContext);
  const { data } = useDataForModal();
  const onCancelClick = () => {
    setData(data);
    cancelDisc.onOpen();
  };

  const onBookClick = () => {
    setData(data);
    bookDisc.onOpen();
  };

  const renderButton = () => {
    if (bookedBy === BookedBy.current)
      return (
        <Button
          rightIcon={<ChatIcon />}
          flexGrow="1"
          h="30px"
          variant="red"
          onClick={onCancelClick}
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
        onClick={onBookClick}
      >
        Записаться
      </Button>
    );
  };

  return (
    <HStack w="100%" p="8px" spacing="4px">
      {renderButton()}
    </HStack>
  );
};
