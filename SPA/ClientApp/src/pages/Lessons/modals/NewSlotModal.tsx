import * as React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useMutation, useQueryClient } from 'react-query';

import {
  SlotInputValuesProps,
  useFormikValues,
} from '../hooks/useFormikValues';
import { lessonsByDateKey } from '../../../query/queryKeys';
import { getDayAndMonthFromDate } from '../../../utils/datetime';
import { DisclosureProps } from '../../../components/disclosureProps';
import {
  InputNumber,
  InputSwitch,
  InputTime,
} from '../components/LessonCalendarTab/ModalInputs';
import { useNewSlotModalSubmit } from '../hooks/useNewSlotModalSubmit';
import { ErrorElement } from '../../../components/Errors/ErrorElement';

type Props = {
  disclosure: DisclosureProps;
  date: Date;
};

export const NewSlotModal: React.FC<Props> = ({ disclosure, date }) => {
  const queryClient = useQueryClient();

  const {
    isOpen,
    onSubmit,
    isSubmitLoading,
    formErrorMessage,
    isError,
    requestErrorMessage,
    resetModalAndClose,
  } = useNewSlotModalSubmit(date, disclosure);

  const { initValues } = useFormikValues();

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => queryClient.invalidateQueries([lessonsByDateKey]),
  });

  return (
    <Modal isOpen={isOpen} onClose={resetModalAndClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Formik
          onSubmit={(v: SlotInputValuesProps) => {
            mutation.mutate(v);
          }}
          initialValues={initValues}
        >
          <Form>
            <ModalBody>
              <ModalHeader>
                Добавить новый слот на {getDayAndMonthFromDate(date)}
              </ModalHeader>
              <ModalCloseButton />
              <FormControl isInvalid={!!formErrorMessage}>
                <HStack>
                  <InputTime
                    label="Начало"
                    placeholder="9:00"
                    name="startTime"
                  />
                  <InputTime label="Конец" placeholder="10:30" name="endTime" />
                  <InputNumber
                    label="₽ / час"
                    placeholder="1000"
                    name="price"
                  />
                  <InputSwitch label="Онлайн" name="isOnline" />
                </HStack>
                <FormErrorMessage color={'red'}>
                  {formErrorMessage}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={resetModalAndClose}
              >
                Отмена
              </Button>
              <Button type="submit" isLoading={isSubmitLoading}>
                Добавить
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
        {isError && <ErrorElement message={requestErrorMessage} />}
      </ModalContent>
    </Modal>
  );
};
