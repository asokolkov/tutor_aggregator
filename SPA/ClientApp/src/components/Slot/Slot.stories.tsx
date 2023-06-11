import { BookedBy, Slot, SlotProps, SlotVariant } from './Slot';
import { LessonType, V1AccountTypeDto } from '../../api/models';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slot> = {
  component: Slot,
  decorators: [(story) => <div style={{ width: '476px' }}>{story()}</div>],
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
