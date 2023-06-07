import * as React from 'react';
import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { SlotContext } from '../contexts/SlotContext';
import LessonsAPI from '../../../api/lessons';
import { lessonsByDateKey } from '../../../query/queryKeys';
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
import { DisclosureProps } from '../../disclosureProps';

type Props = {
  disclosure: DisclosureProps;
};
export const CancelLessonModal: React.FC<Props> = ({ disclosure }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const queryClient = useQueryClient();
  const { tutorName, lessonId, timeRange } = useContext(SlotContext);

  const onSubmit = async () => {
    setSubmitLoading(true);
    await LessonsAPI.cancelLesson(lessonId);
    setSubmitLoading(false);
    onClose();
  };

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => queryClient.invalidateQueries([lessonsByDateKey]),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <ModalHeader>
            Вы действительно хотите отменить запись на занятие?
          </ModalHeader>
          <ModalCloseButton />
          <Text>Будет отменена запись к преподвавателю:</Text>
          <Text variant="regular.bold">{tutorName}</Text>
          <Text>Время занятия:</Text>
          <Text variant="regular.bold">{`Время: ${timeRange}`}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isSubmitLoading}
            colorScheme="blue"
            onClick={() => mutation.mutate()}
          >
            Отменить
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Закрыть без отмены
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
