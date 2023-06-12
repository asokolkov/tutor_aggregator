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
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getTutorBookSuccessPath } from '../../routes/routes';
import { useTutorId } from '../../routes/params';
import { V1LessonDto } from '../../api/models';
import { getFullTutorName } from '../../utils/names';
import { getDayAndMonthFromDate, getTimeFromDate } from '../../utils/datetime';
import { isAxiosError } from 'axios';

type Props = {
  disclosure: DisclosureProps;
};

export function modal(
  BodyComponent: React.FC,
  FooterComponent: React.FC<ModalFooterProps>,
  onSubmit: (lessonId: string) => Promise<void | V1LessonDto>,
  modalTitle: string,
  navigateToConfirm?: boolean
): React.FC<Props> {
  return ({ disclosure }) => {
    const { isOpen, onClose } = disclosure;
    const { data } = useContext(ModalContext);
    const [isSubmitLoading, setSubmitLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const tutorId = useTutorId();

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const navigateToSuccessPage = (response: V1LessonDto) => {
      const date = new Date(response.start);
      navigate({
        pathname: getTutorBookSuccessPath(tutorId),
        search: createSearchParams({
          name: getFullTutorName(response.tutor),
          price: response.price.toString(),
          time: getTimeFromDate(date),
          date: getDayAndMonthFromDate(date),
        }).toString(),
      });
    };

    const mutationFn = async () => {
      setError(false);
      setSubmitLoading(true);
      try {
        const response = await onSubmit(data.lessonId);
        onClose();
        if (navigateToConfirm) navigateToSuccessPage(response as V1LessonDto);
      } catch (err) {
        if (isAxiosError(err) && err.response.status === 409)
          setErrorMessage('Занятие уже началось или прошло');
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

    const restoreAndClose = () => {
      setError(false);
      setErrorMessage('');
      setSubmitLoading(false);
      onClose();
    };

    return (
      <Modal isOpen={isOpen} onClose={restoreAndClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <BodyComponent />
          </ModalBody>
          <FooterComponent
            isSubmitLoading={isSubmitLoading}
            onClose={restoreAndClose}
            mutateFunction={mutation.mutate}
          />
          {isError && <ErrorElement message={errorMessage} />}
        </ModalContent>
      </Modal>
    );
  };
}
