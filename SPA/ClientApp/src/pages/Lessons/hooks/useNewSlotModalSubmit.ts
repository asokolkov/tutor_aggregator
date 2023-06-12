import { SlotInputValuesProps } from './useFormikValues';
import LessonsAPI from '../../../api/lessons';
import { LessonType } from '../../../api/models';
import { useState } from 'react';
import { getHoursAndMinutes } from '../../../utils/datetime';
import { isAxiosError } from 'axios';
import { DisclosureProps } from '../../../components/disclosureProps';

export function useNewSlotModalSubmit(
  date: Date,
  { onClose, isOpen }: DisclosureProps
) {
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState('');

  const onSubmit = async (values: SlotInputValuesProps) => {
    resetErrors();
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

    try {
      await LessonsAPI.createNewSlot(
        startDate,
        endDate,
        values.price,
        values.isOnline ? LessonType.online : LessonType.offline
      );
      onClose();
    } catch (err) {
      if (isAxiosError(err) && err.response.status === 409) {
        setRequestErrorMessage(
          'Слот должен быть создан на один день, время конца должно быть позже времени начала.'
        );
      }
      setError(true);
    }
    setSubmitLoading(false);
  };

  const validateTime = (start: TimeBoxValues, end: TimeBoxValues) => {
    if (
      start.hours > end.hours ||
      (start.hours === end.hours && start.minutes >= end.minutes)
    ) {
      setFormErrorMessage('Время конца должно быть позже времени начала');
      setSubmitLoading(false);
      return false;
    }
    return true;
  };

  const resetErrors = () => {
    setFormErrorMessage('');
    setError(false);
    setRequestErrorMessage('');
  };

  const resetModalAndClose = () => {
    resetErrors();
    setSubmitLoading(false);
    onClose();
  };

  return {
    isOpen,
    onSubmit,
    isSubmitLoading,
    formErrorMessage,
    isError,
    requestErrorMessage,
    resetModalAndClose,
  };
}

type TimeBoxValues = {
  hours: number;
  minutes: number;
};
