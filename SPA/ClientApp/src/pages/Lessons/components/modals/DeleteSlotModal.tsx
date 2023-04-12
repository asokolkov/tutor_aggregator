import * as React from 'react';
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
import { DisclosureProps } from './_shared';
import LessonsAPI, { Lesson } from '../../../../api/lessons';
import { getTimeFromDate } from '../Slot/_helpers';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { lessonsKey } from '../../../../query/queryKeys';

type Props = {
  disclosure: DisclosureProps;
  lesson: Lesson;
};
export const DeleteSlotModal: React.FC<Props> = ({ disclosure, lesson }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const queryClient = useQueryClient();

  const onSubmit = async () => {
    setSubmitLoading(true);
    await LessonsAPI.deleteLesson(lesson.id);
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
          <ModalHeader>Вы действительно хотите удалить слот?</ModalHeader>
          <ModalCloseButton />
          <Text>Выбранный слот будет удален.</Text>
          <Text variant="semibold">
            {`Время: ${getTimeFromDate(lesson.start)} - ${getTimeFromDate(
              lesson.end
            )}`}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isSubmitLoading}
            colorScheme="blue"
            onClick={() => mutation.mutate()}
          >
            Удалить
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
