import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { V1ContactsDto } from '../../../api/models';

export function useContactSlotModal() {
  const [contacts, setContacts] = useState<V1ContactsDto[]>([]);
  const disclosure = useDisclosure();
  const contactsProviderValue = { contacts, setContacts, disclosure };
  return { contactsProviderValue };
}
