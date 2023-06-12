import { BookedBy, Slot, SlotProps, SlotVariant } from './Slot';
import { LessonType, V1AccountTypeDto } from '../../api/models';
import { Decorator, Meta, StoryObj } from '@storybook/react';
import { ModalContext } from './contexts/ModalContext';
import { useModal } from './hooks/useModal';
import { CancelLessonModal } from './modals/CancelLessonModal';
import { BookLessonModal } from './modals/BookLessonModal';
import { DeleteSlotModal } from './modals/DeleteSlotModal';
import * as React from 'react';
import { Default } from '../ContactsModal/ContactModal.stories';
import { ContactModalContext } from '../ContactsModal/contexts/ContactModalContext';
import { useContactSlotModal } from '../ContactsModal/hooks/useContactSlotModal';
import { ContactsModal } from '../ContactsModal/ContactsModal';

const containerDec: Decorator = (story) => (
  <div style={{ width: '476px' }}>{story()}</div>
);

const modalProviderDec: Decorator = (story) => {
  const { modalProviderValue } = useModal();
  const { contactsProviderValue } = useContactSlotModal();
  return (
    <ContactModalContext.Provider value={contactsProviderValue}>
      <ModalContext.Provider value={modalProviderValue}>
        <CancelLessonModal disclosure={modalProviderValue.cancelDisc} />
        <BookLessonModal disclosure={modalProviderValue.bookDisc} />
        <DeleteSlotModal disclosure={modalProviderValue.deleteDisc} />
        <ContactsModal disclosure={contactsProviderValue.disclosure} />
        {story()}
      </ModalContext.Provider>
    </ContactModalContext.Provider>
  );
};

const meta: Meta<typeof Slot> = {
  component: Slot,
  decorators: [containerDec, modalProviderDec],
  argTypes: { startDate: { control: 'date' }, endDate: { control: 'date' } },
};
export default meta;
type Story = StoryObj<typeof Slot>;
const slotProps: SlotProps = {
  variant: SlotVariant.tutorCalendar,
  bookedBy: BookedBy.nobody,
  startDate: new Date(),
  endDate: new Date(),
  price: 1000,
  studentName: 'Студент Студентович',
  tutorName: 'Учитель Учительевич',
  type: LessonType.offline,
  lessonId: '00000000-0000-0000-0000-000000000000',
  contacts: Default.args.contacts,
};

export const Tutor: Story = {
  render: (args) => {
    return (
      <Slot
        {...args}
        endDate={new Date(args.endDate)}
        startDate={new Date(args.startDate)}
      />
    );
  },
  args: {
    ...slotProps,
  },
};

export const Student = {
  args: { ...slotProps, accountType: V1AccountTypeDto.student },
};
