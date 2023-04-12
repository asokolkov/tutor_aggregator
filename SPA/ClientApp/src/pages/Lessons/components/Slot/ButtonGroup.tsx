import * as React from 'react';
import { Button, HStack, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { SlotContext } from '../../../../contexts/SlotContext';
import { ChatIcon, DeleteIcon } from '@chakra-ui/icons';

export const ButtonGroup: React.FC = () => {
  const { isBooked, onDeleteModalOpen } = useContext(SlotContext);

  return (
    <HStack w="100%" p="8px" spacing="4px">
      {isBooked ? (
        <Button rightIcon={<ChatIcon />} w="100%" bg="green.200" color="white">
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
        onClick={onDeleteModalOpen}
      />
    </HStack>
  );
};
