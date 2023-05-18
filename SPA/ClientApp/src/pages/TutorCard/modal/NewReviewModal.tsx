import React, { useState } from 'react';
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
import { DisclosureProps } from '../../sharedComponents/disclosureProps';
import TutorsAPI from '../../../api/tutors';
import { Formik, FormikValues, Form } from 'formik';
import { useTutorId } from '../../../routes/params';
import { ReviewModalForm } from '../components/ReviewModalForm';
import { reviewKey } from '../../../query/queryKeys';

interface Props {
  disclosure: DisclosureProps;
}

const NewReviewModal: React.FC<Props> = ({ disclosure }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const queryClient = useQueryClient();
  const tutorId = useTutorId();

  const initValues: FormikValues = {
    rating: 5,
    text: '',
  };

  const onSubmit = async (values: FormikValues) => {
    setSubmitLoading(true);
    await TutorsAPI.addReview(tutorId, values.rating, values.text);
    setSubmitLoading(false);
    onClose();
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
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default NewReviewModal;
