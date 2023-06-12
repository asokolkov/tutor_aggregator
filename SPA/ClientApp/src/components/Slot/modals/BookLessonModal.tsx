import * as React from 'react';
import { useContext } from 'react';
import LessonsAPI from '../../../api/lessons';
import { Text } from '@chakra-ui/react';
import { modalFooter } from '../../LessonModalsHOC/ModalFooter';
import { modal } from '../../LessonModalsHOC/Modal';
import { ModalContext } from '../contexts/ModalContext';

const onSubmit = async (lessonId: string) => {
  const lessonDto = await LessonsAPI.bookLesson(lessonId);
  return lessonDto;
};

const modalTitle = 'Вы действительно хотите записаться на занятие?';

const Footer = modalFooter(undefined, 'Записаться');
const Body: React.FC = () => {
  const { data } = useContext(ModalContext);
  return (
    <>
      <Text>Вы записываетесь на занятие к преподавателю:</Text>
      <Text variant="regular.bold">{data.tutorName}</Text>
      <Text>Время занятия:</Text>
      <Text variant="regular.bold">{data.timeRange}</Text>
    </>
  );
};

export const BookLessonModal = modal(Body, Footer, onSubmit, modalTitle, true);
