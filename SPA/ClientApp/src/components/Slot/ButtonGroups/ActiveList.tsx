import * as React from 'react';
import { useContext } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { ModalContext } from '../contexts/ModalContext';
import { useDataForModal } from '../hooks/useDataForModal';
import { ContactModalContext } from '../../ContactsModal/contexts/ContactModalContext';
import { SlotContext } from '../contexts/SlotContext';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto } from '../../../api/models';

export const ActiveList: React.FC = () => {
  const { contacts } = useContext(SlotContext);
  const { setData, cancelDisc } = useContext(ModalContext);
  const { setContacts, disclosure } = useContext(ContactModalContext);
  const { user } = useContext(UserContext);
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

      {user.accountType === V1AccountTypeDto.student && (
        <Button
          rightIcon={<CloseIcon />}
          h="30px"
          onClick={onCancelClick}
          variant="red"
        >
          Отменить
        </Button>
      )}
    </HStack>
  );
};
