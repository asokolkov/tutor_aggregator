import * as React from 'react';
import ContactsPopoverButton from './ContactsPopoverButton';
import { Button, useBreakpointValue } from '@chakra-ui/react';
import { mapCollectionToString } from './_helpers';
import { Contact } from '../../../api/_share';

type Props = {
  contacts: Contact[];
};
export const ButtonSection: React.FC<Props> = ({ contacts }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <ContactsPopoverButton
        contacts={mapCollectionToString(contacts.map((c) => c.value))}
      />
      <Button
        size={'md'}
        colorScheme={'green'}
        width={'100%'}
        margin={isDesktop ? '0 0 0 1em' : '8px 0 0 0'}
      >
        Записаться на занятие
      </Button>
    </>
  );
};
