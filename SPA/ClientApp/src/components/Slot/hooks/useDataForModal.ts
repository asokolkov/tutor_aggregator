import { useContext } from 'react';
import { ModalData } from '../contexts/ModalContext';
import { SlotContext } from '../contexts/SlotContext';

export function useDataForModal() {
  const { bookedBy, lessonId, studentName, tutorName, timeRange } =
    useContext(SlotContext);
  const dataForModal: ModalData = {
    bookedBy,
    lessonId,
    studentName,
    timeRange,
    tutorName,
  };
  return { data: dataForModal };
}
