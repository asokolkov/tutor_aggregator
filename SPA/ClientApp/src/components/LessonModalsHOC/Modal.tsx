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
import { allLessonsKey, lessonsByDateKey } from '../../query/queryKeys';
import { ErrorElement } from '../Errors/ErrorElement';
import { ModalContext } from '../Slot/contexts/ModalContext';

type Props = {
  disclosure: DisclosureProps;
};

export function modal(
  BodyComponent: React.FC,
  FooterComponent: React.FC<ModalFooterProps>,
  onSubmit: (lessonId: string) => Promise<void>,
  modalTitle: string
): React.FC<Props> {
  return ({ disclosure }) => {
    const { isOpen, onClose } = disclosure;
    const { data } = useContext(ModalContext);
    const [isSubmitLoading, setSubmitLoading] = useState(false);
    const [isError, setError] = useState(false);

    const queryClient = useQueryClient();

    const mutationFn = async () => {
      setError(false);
      setSubmitLoading(true);
      try {
        await onSubmit(data.lessonId);
        onClose();
      } catch {
        setError(true);
      }
      setSubmitLoading(false);
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
          {isError && <ErrorElement />}
        </ModalContent>
      </Modal>
    );
  };
}
