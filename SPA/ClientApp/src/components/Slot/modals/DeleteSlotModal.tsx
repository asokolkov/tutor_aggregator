import * as React from 'react';
import { useContext } from 'react';
import { Alert, AlertIcon, Text, VStack } from '@chakra-ui/react';
import LessonsAPI from '../../../api/lessons';
import { SlotContext } from '../contexts/SlotContext';
import { modalFooter } from '../../LessonModalsHOC/ModalFooter';
import { modal } from '../../LessonModalsHOC/Modal';
import { ButtonVariant } from '../../../assets/theme/themeEnum';

const onSubmit = async (lessonId: string) => {
  await LessonsAPI.deleteLesson(lessonId);
};

const modalTitle = 'Вы действительно хотите удалить слот?';
const Body: React.FC = () => {
  const { timeRange, studentName, isBooked } = useContext(SlotContext);
  return (
    <VStack align={'start'}>
      {isBooked && (
        <Alert status="warning">
          <AlertIcon />
          <Text>
            На данный слот записан ученик <b>{studentName}</b>. Запись будет
            отменена
          </Text>
        </Alert>
      )}
      <VStack align={'start'} pl="16px" spacing="0">
        <Text>Выбранный слот будет удален.</Text>
        <Text variant="regular.bold">{`Время: ${timeRange}`}</Text>
      </VStack>
    </VStack>
  );
};

const Footer = modalFooter(ButtonVariant.red, 'Удалить');

export const DeleteSlotModal = modal(Body, Footer, onSubmit, modalTitle);
