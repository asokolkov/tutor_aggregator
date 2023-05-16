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
import { CardInfoContext } from '../../../contexts/CardInfoContext';

const ContactsPopoverButton: React.FC = () => {
  const context = useContext(CardInfoContext);

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button variant="blue.300" w="100%">
          Показать контакты
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton height={'3em'} />
        <PopoverBody fontSize={'lg'}>{context.contacts}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ContactsPopoverButton;
