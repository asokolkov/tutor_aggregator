import * as React from 'react';
import { useContext } from 'react';
import { Button, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { SlotContext } from '../contexts/SlotContext';
import { ChatIcon, DeleteIcon } from '@chakra-ui/icons';
import { DeleteSlotModal } from '../modals/DeleteSlotModal';
import { BookedBy } from '../Slot';

export const TutorCalendar: React.FC = () => {
  const { bookedBy } = useContext(SlotContext);
  const disclosure = useDisclosure();

  return (
    <>
      <DeleteSlotModal disclosure={disclosure} />
      <HStack w="100%" p="8px" spacing="4px">
        {bookedBy !== BookedBy.nobody ? (
          <Button
            rightIcon={<ChatIcon />}
            flexGrow="1"
            h="30px"
            variant="blue.300"
          >
            Показать контакты
          </Button>
        ) : (
          <Button w="100%" h="30px" variant="blue.200">
            Никто не записан
          </Button>
        )}
        <IconButton
          icon={<DeleteIcon />}
          h="30px"
          width="30px"
          aria-label="Удалить слот"
          onClick={disclosure.onOpen}
          variant="red"
        />
      </HStack>
    </>
  );
};
