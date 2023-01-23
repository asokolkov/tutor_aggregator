import React from 'react';
import {
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverTrigger,
  Popover,
  PopoverBody,
} from '@chakra-ui/react';

interface Props {
  contacts: string;
}

const ContactsPopoverButton: React.FC<Props> = ({ contacts }) => {
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
        <PopoverBody fontSize={'lg'}>{contacts}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ContactsPopoverButton;
