import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from '../contexts/SlotContext';
import LessonsAPI from '../../../api/lessons';
import { Text } from '@chakra-ui/react';
import { modalFooter } from '../../LessonModalsHOC/ModalFooter';
import { modal } from '../../LessonModalsHOC/Modal';

const onSubmit = async (lessonId: string) => {
  await LessonsAPI.bookLesson(lessonId);
};

const modalTitle = 'Вы действительно хотите записаться на занятие?';

const Footer = modalFooter(undefined, 'Записаться');
const Body: React.FC = () => {
  const { tutorName, timeRange } = useContext(SlotContext);
  return (
    <>
      <Text>Вы записываетесь на занятие к преподавателю:</Text>
      <Text variant="regular.bold">{tutorName}</Text>
      <Text>Время занятия:</Text>
      <Text variant="regular.bold">{timeRange}</Text>
    </>
  );
};

export const BookLessonModal = modal(Body, Footer, onSubmit, modalTitle);
