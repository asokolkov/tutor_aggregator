import * as React from 'react';
import {
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import LessonsAPI from '../../../../api/lessons';
import {
  DisclosureProps,
  getTimeFromDate,
} from '../../../sharedComponents/Slot/_helpers';
import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { lessonsKey } from '../../../../query/queryKeys';
import { SlotContext } from '../../../../contexts/SlotContext';

type Props = {
  disclosure: DisclosureProps;
};
export const DeleteSlotModal: React.FC<Props> = ({ disclosure }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const queryClient = useQueryClient();
  const { lesson, studentName, isBooked } = useContext(SlotContext);
  const { id, start, end } = lesson;

  const onSubmit = async () => {
    setSubmitLoading(true);
    await LessonsAPI.deleteLesson(id);
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
          <VStack align={'start'}>
            {isBooked && (
              <Alert status="warning">
                <AlertIcon />
                <Text>
                  На данный слот записан ученик <b>{studentName}</b>. Запись
                  будет отменена
                </Text>
              </Alert>
            )}
            <VStack align={'start'} pl="16px" spacing="0">
              <Text>Выбранный слот будет удален.</Text>
              <Text variant="semibold">
                {`Время: ${getTimeFromDate(start)} - ${getTimeFromDate(end)}`}
              </Text>
            </VStack>
          </VStack>
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
