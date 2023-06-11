import * as React from 'react';
import { useContext } from 'react';
import LessonsAPI from '../../../api/lessons';
import { Text } from '@chakra-ui/react';
import { modal } from '../../LessonModalsHOC/Modal';
import { modalFooter } from '../../LessonModalsHOC/ModalFooter';
import { ButtonVariant } from '../../../assets/theme/themeEnum';
import { ModalContext } from '../contexts/ModalContext';

const onSuccess = async (lessonId: string) => {
  await LessonsAPI.cancelLesson(lessonId);
};

const modalTitle = 'Вы действительно хотите отменить запись на занятие?';

const Body: React.FC = () => {
  const { data } = useContext(ModalContext);
  return (
    <>
      <Text>Будет отменена запись к преподвавателю:</Text>
      <Text variant="regular.bold">{data.tutorName}</Text>
      <Text>Время занятия:</Text>
      <Text variant="regular.bold">{`Время: ${data.timeRange}`}</Text>
    </>
  );
};

const Footer = modalFooter(ButtonVariant.red, 'Отменить', 'Закрыть без отмены');

export const CancelLessonModal = modal(Body, Footer, onSuccess, modalTitle);
