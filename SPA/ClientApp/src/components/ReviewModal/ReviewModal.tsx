import React, { useContext, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  ModalBody,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { DisclosureProps } from '../disclosureProps';
import TutorsAPI from '../../api/tutors';
import { Formik, FormikValues, Form } from 'formik';
import { useTutorId } from '../../routes/params';
import { ReviewModalForm } from '../../pages/TutorCard/components/ReviewModalForm';
import { reviewKey } from '../../query/queryKeys';
import { ErrorElement } from '../Errors/ErrorElement';
import { ReviewModalContext } from './contexts/ReviewModalContext';

interface Props {
  disclosure: DisclosureProps;
}

const ReviewModal: React.FC<Props> = ({ disclosure }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [isError, setError] = useState(false);

  const queryClient = useQueryClient();
  const { tutorId } = useContext(ReviewModalContext);

  const initValues: FormikValues = {
    rating: 5,
    text: '',
  };

  const onSubmit = async (values: FormikValues) => {
    setError(false);
    setSubmitLoading(true);
    try {
      await TutorsAPI.addReview(tutorId, values.rating, values.text);
      onClose();
    } catch {
      setError(true);
    }
    setSubmitLoading(false);
  };

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => queryClient.invalidateQueries([reviewKey]),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <Formik initialValues={initValues} onSubmit={(v) => mutation.mutate(v)}>
          <Form>
            <ModalHeader>Оставить отзыв</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ReviewModalForm />
            </ModalBody>
            <ModalFooter gap="16px">
              <Button colorScheme="blue" variant="outline" onClick={onClose}>
                Назад
              </Button>
              <Button variant="green" type="submit" isLoading={isSubmitLoading}>
                Отправить
              </Button>
            </ModalFooter>
            {isError && <ErrorElement />}
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default ReviewModal;
