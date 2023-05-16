import { Slot, SlotProps } from './Slot';
import { LessonType } from '../../../api/lessons';

export default {
  component: Slot,
};

const args: SlotProps = {
  endTime: '',
  startTime: '',
  isBooked: false,
  isForTutor: true,
  lessonId: '',
  price: 0,
  student: { id: '', name: '' },
  tutorName: '',
  type: LessonType.Offline,
};
export const Tutor = {
  args,
};

export const Student = {
  args: { ...args, isForTutor: false },
};
