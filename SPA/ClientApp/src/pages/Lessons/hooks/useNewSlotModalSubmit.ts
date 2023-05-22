import { SlotInputValuesProps } from './useFormikValues';
import LessonsAPI from '../../../api/lessons';
import { LessonType } from '../../../api/models';
import { useState } from 'react';
import { getHoursAndMinutes } from '../../../utils/datetime';

export function useNewSlotModalSubmit(date: Date) {
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const onSubmit = async (values: SlotInputValuesProps) => {
    setSubmitLoading(true);
    const startValues = getHoursAndMinutes(values.startTime);
    const endValues = getHoursAndMinutes(values.endTime);

    if (!validateTime(startValues, endValues)) return;

    const startDate = new Date(date);
    startDate.setHours(startValues.hours);
    startDate.setMinutes(startValues.minutes);

    const endDate = new Date(date);
    endDate.setHours(endValues.hours);
    endDate.setMinutes(endValues.minutes);

    await LessonsAPI.createNewSlot(
      startDate,
      endDate,
      values.price,
      values.isOnline ? LessonType.online : LessonType.offline
    );
    setSubmitLoading(false);
  };

  const validateTime = (start: TimeBoxValues, end: TimeBoxValues) => {
    if (start.hours > end.hours || start.minutes > end.minutes) {
      setFormErrorMessage('Время начала должно быть не позже времени конца');
      setSubmitLoading(false);
      return false;
    }
    return true;
  };

  return { onSubmit, isSubmitLoading, formErrorMessage };
}

type TimeBoxValues = {
  hours: number;
  minutes: number;
};
