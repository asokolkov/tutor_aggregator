import { Slot } from './Slot';
import { LessonType, V1AccountTypeDto } from '../../api/models';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Slot> = {
  component: Slot,
  decorators: [(story) => <div style={{ width: '476px' }}>{story()}</div>],
};
export default meta;

const args = {
  endTime: '',
  startTime: '',
  isBooked: false,
  price: 0,
  student: { id: '', name: '' },
  tutorName: '',
  type: LessonType.offline,
};
export const Tutor = {
  args: { ...args, accountType: V1AccountTypeDto.tutor },
};

export const Student = {
  args: { ...args, accountType: V1AccountTypeDto.student },
};
