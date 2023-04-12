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
import LessonsAPI from '../../../../api/lessons';
import { getTimeFromDate } from '../../../sharedComponents/Slot/_helpers';
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
  const context = useContext(SlotContext);

  const onSubmit = async () => {
    setSubmitLoading(true);
    await LessonsAPI.deleteLesson(context.id);
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
            {`Время: ${getTimeFromDate(context.startDate)} - ${getTimeFromDate(
              context.endDate
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
