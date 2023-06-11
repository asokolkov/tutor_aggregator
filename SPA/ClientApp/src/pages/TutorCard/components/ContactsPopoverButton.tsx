import React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import { ContactsModal } from '../../../components/ContactsModal/ContactsModal';

const ContactsPopoverButton: React.FC = () => {
  const disclosure = useDisclosure();
  return (
    <>
      <ContactsModal disclosure={disclosure} />
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
