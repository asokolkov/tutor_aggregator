import * as React from 'react';
import { useContext, useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ModalFooterProps } from './ModalFooter';
import { DisclosureProps } from '../disclosureProps';
import { useMutation, useQueryClient } from 'react-query';
import { SlotContext } from '../Slot/contexts/SlotContext';
import { allLessonsKey, lessonsByDateKey } from '../../query/queryKeys';

type Props = {
  disclosure: DisclosureProps;
};

export function modal(
  BodyComponent: React.FC,
  FooterComponent: React.FC<ModalFooterProps>,
  onSubmit: (lessonId: string) => void,
  modalTitle: string
): React.FC<Props> {
  return ({ disclosure }) => {
    const { isOpen, onClose } = disclosure;
    const [isSubmitLoading, setSubmitLoading] = useState(false);
    const queryClient = useQueryClient();
    const { lessonId } = useContext(SlotContext);

    const mutationFn = async () => {
      setSubmitLoading(true);
      await onSubmit(lessonId);
      setSubmitLoading(false);
      onClose();
    };

    const mutation = useMutation({
      mutationFn,
      onSuccess: () =>
        Promise.all([
          queryClient.invalidateQueries([lessonsByDateKey]),
          queryClient.invalidateQueries([allLessonsKey]),
        ]),
    });

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <BodyComponent />
          </ModalBody>
          <FooterComponent
            isSubmitLoading={isSubmitLoading}
            onClose={onClose}
            mutateFunction={mutation.mutate}
          />
        </ModalContent>
      </Modal>
    );
  };
}
