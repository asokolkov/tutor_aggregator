import * as React from 'react';
import { Button, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { SlotContext } from '../../../contexts/SlotContext';
import { ChatIcon, DeleteIcon } from '@chakra-ui/icons';
import { DeleteSlotModal } from '../../Lessons/components/modals/DeleteSlotModal';

export const ButtonGroupTutor: React.FC = () => {
  const { isBooked } = useContext(SlotContext);
  const disclosure = useDisclosure();

  return (
    <>
      <DeleteSlotModal disclosure={disclosure} />
      <HStack w="100%" p="8px" spacing="4px">
        {isBooked ? (
          <Button
            rightIcon={<ChatIcon />}
            w="100%"
            bg="green.200"
            color="white"
          >
            Связаться
          </Button>
        ) : (
          <Button w="100%" bg="gray.300" color="white">
            Никто не записан
          </Button>
        )}
        <IconButton
          icon={<DeleteIcon />}
          bg="red"
          color="white"
          aria-label="Удалить слот"
          onClick={disclosure.onOpen}
        />
      </HStack>
    </>
  );
};
