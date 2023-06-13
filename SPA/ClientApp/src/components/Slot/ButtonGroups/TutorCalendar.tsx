import * as React from 'react';
import { useContext } from 'react';
import { Button, Flex, HStack, IconButton } from '@chakra-ui/react';
import { SlotContext } from '../contexts/SlotContext';
import { ChatIcon, DeleteIcon } from '@chakra-ui/icons';
import { BookedBy } from '../Slot';
import { ModalContext } from '../contexts/ModalContext';
import { useDataForModal } from '../hooks/useDataForModal';
import { ContactModalContext } from '../../ContactsModal/contexts/ContactModalContext';

export const TutorCalendar: React.FC = () => {
  const { bookedBy, contacts } = useContext(SlotContext);
  const { setData, deleteDisc } = useContext(ModalContext);
  const { data } = useDataForModal();
  const { setContacts, disclosure } = useContext(ContactModalContext);

  const onDeleteClick = () => {
    setData(data);
    deleteDisc.onOpen();
  };

  const onContactsClick = () => {
    setContacts(contacts);
    disclosure.onOpen();
  };

  return (
    <HStack w="100%" p="8px" spacing="4px">
      {bookedBy !== BookedBy.nobody ? (
        <Button
          rightIcon={<ChatIcon />}
          flexGrow="1"
          h="30px"
          variant="blue.300"
          onClick={onContactsClick}
        >
          Показать контакты
        </Button>
      ) : (
        <Flex
          w="100%"
          h="30px"
          bg="custom.blue.100"
          justify={'center'}
          align={'center'}
          gap={'8px'}
        >
          Никто не записан
        </Flex>
      )}
      <IconButton
        icon={<DeleteIcon />}
        h="30px"
        width="30px"
        aria-label="Удалить слот"
        onClick={onDeleteClick}
        variant="red"
      />
    </HStack>
  );
};
