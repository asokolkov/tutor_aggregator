import React, { useContext } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import { CardInfoContext } from '../contexts/CardInfoContext';
import { ContactsModal } from '../../../components/modals/ContactsModal';

const ContactsPopoverButton: React.FC = () => {
  const { contacts, isLoading } = useContext(CardInfoContext);
  const disclosure = useDisclosure();

  return (
    <>
      {!isLoading && (
        <ContactsModal disclosure={disclosure} contacts={contacts} />
      )}
      <Button
        variant="blue.300"
        w="100%"
        flex="1 0 208px"
        onClick={disclosure.onOpen}
      >
        Показать контакты
      </Button>
    </>
  );
};

export default ContactsPopoverButton;
