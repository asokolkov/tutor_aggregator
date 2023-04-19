import React, { useContext } from 'react';
import {
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverTrigger,
  Popover,
  PopoverBody,
} from '@chakra-ui/react';
import { TutorCardContext } from '../../../contexts/TutorCardContext';
import { mapCollectionToString } from './_helpers';

const ContactsPopoverButton: React.FC = () => {
  const context = useContext(TutorCardContext);
  const contacts = context.tutor.contacts;

  const strContacts = mapCollectionToString(
    contacts.map((contact) => contact.value)
  );

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button size={'md'} colorScheme={'blue'} width={'100%'}>
          Показать контакты
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton height={'3em'} />
        <PopoverBody fontSize={'lg'}>{strContacts}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ContactsPopoverButton;
