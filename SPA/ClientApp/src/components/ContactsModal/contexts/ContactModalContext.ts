import React from 'react';
import { DisclosureProps } from '../../disclosureProps';
import { V1ContactsDto } from '../../../api/models';

export type ModalContextProps = {
  disclosure?: DisclosureProps;
  contacts: V1ContactsDto[];
  setContacts?: (contacts: V1ContactsDto[]) => void;
};

export const ContactModalContext = React.createContext<ModalContextProps>({
  contacts: [],
});
