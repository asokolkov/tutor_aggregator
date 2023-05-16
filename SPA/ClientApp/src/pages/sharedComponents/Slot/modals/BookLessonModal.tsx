import * as React from 'react';
import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { SlotContext } from '../../../../contexts/SlotContext';
import LessonsAPI from '../../../../api/lessons';
import { lessonsKey } from '../../../../query/queryKeys';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { DisclosureProps } from '../_helpers';

type Props = {
  disclosure: DisclosureProps;
};
export const BookLessonModal: React.FC<Props> = ({ disclosure }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const queryClient = useQueryClient();
  const { tutorName, lessonId, timeRange } = useContext(SlotContext);

  const onSubmit = async () => {
    setSubmitLoading(true);
    await LessonsAPI.bookLesson(lessonId);
    setSubmitLoading(false);
    onClose();
  };

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => queryClient.invalidateQueries([lessonsKey]),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <ModalHeader>
            Вы действительно хотите записаться на занятие?
          </ModalHeader>
          <ModalCloseButton />
          <Text>Вы записываетесь на занятие к преподавателю:</Text>
          <Text variant="regular.bold">{tutorName}</Text>
          <Text>Время занятия:</Text>
          <Text variant="regular.bold">{timeRange}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isSubmitLoading}
            colorScheme="blue"
            onClick={() => mutation.mutate()}
          >
            Записаться
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
