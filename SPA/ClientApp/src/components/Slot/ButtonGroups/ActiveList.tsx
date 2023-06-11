import * as React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import { useDataForModal } from '../hooks/useDataForModal';
import { ContactModalContext } from '../../ContactsModal/contexts/ContactModalContext';
import { SlotContext } from '../contexts/SlotContext';

export const ActiveList: React.FC = () => {
  const { contacts } = useContext(SlotContext);
  const { setData, cancelDisc } = useContext(ModalContext);
  const { setContacts, disclosure } = useContext(ContactModalContext);
  const { data } = useDataForModal();
  const onCancelClick = () => {
    setData(data);
    cancelDisc.onOpen();
  };

  const onContactsClick = () => {
    setContacts(contacts);
    disclosure.onOpen();
  };

  return (
    <HStack w="100%" p="8px" spacing="4px">
      <Button
        rightIcon={<ChatIcon />}
        flexGrow="1"
        h="30px"
        variant="green"
        onClick={onContactsClick}
      >
        Показать контакты
      </Button>

      <Button
        rightIcon={<CloseIcon />}
        h="30px"
        onClick={onCancelClick}
        variant="red"
      >
        Отменить
      </Button>
    </HStack>
  );
};
