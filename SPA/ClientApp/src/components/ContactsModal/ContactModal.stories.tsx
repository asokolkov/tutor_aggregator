import { ContactsModal } from './ContactsModal';
import { Meta } from '@storybook/react';
import { V1ContactsDto, V1ContactTypeDto } from '../../api/models';
import { DisclosureProps } from '../disclosureProps';

const meta: Meta<typeof ContactsModal> = {
  component: ContactsModal,
};

export default meta;

const telegramContact: V1ContactsDto = {
  type: V1ContactTypeDto.telegram,
  value: 'artemijkurganov',
};

const emailContact: V1ContactsDto = {
  type: V1ContactTypeDto.email,
  value: 'tutoraggregator@gmail.com',
};

const phoneContact: V1ContactsDto = {
  type: V1ContactTypeDto.phone,
  value: '+79991234567',
};

const contacts: V1ContactsDto[] = [telegramContact, emailContact, phoneContact];

const disclosure: DisclosureProps = {
  isOpen: true,
  onClose(): void {},
  onOpen(): void {},
};

export const Default = {
  args: {
    contacts,
    disclosure,
  },
};
