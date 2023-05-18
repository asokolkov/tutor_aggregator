import * as React from 'react';
import { useState } from 'react';
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
import { NewSlotInputTime } from '../DayColumn/NewSlotInputTime';
import { NewSlotInputPrice } from '../DayColumn/NewSlotInputPrice';
import { Form, Formik } from 'formik';
import LessonsAPI, { LessonType } from '../../../../api/lessons';
import { slotInputValues, SlotInputValuesProps } from './_formikHelper';
import { useMutation, useQueryClient } from 'react-query';
import { lessonsKey } from '../../../../query/queryKeys';
import { dayAndMonth } from '../../../sharedComponents/Slot/_helpers';
import { NewSlotInputSwitch } from '../DayColumn/NewSlotInputSwitch';
import { DisclosureProps } from '../../../sharedComponents/disclosureProps';

type Props = {
  disclosure: DisclosureProps;
  date: Date;
};

type TimeBoxValues = {
  hours: number;
  minutes: number;
};

export const AddNewSlotModal: React.FC<Props> = ({ disclosure, date }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const queryClient = useQueryClient();
  const [formErrorMessage, setFormErrorMessage] = useState('');

  const getHoursAndMinutes = (forInput: string) => {
    const [hours, minutes] = forInput.split(':');
    return { hours: +hours, minutes: +minutes };
  };

  const validateTime = (start: TimeBoxValues, end: TimeBoxValues) => {
    if (start.hours > end.hours || start.minutes > end.minutes) {
      setFormErrorMessage('Время начала должно быть не позже времени конца');
      setSubmitLoading(false);
      return false;
    }
    return true;
  };

  const onSubmit = async (values: SlotInputValuesProps) => {
    setSubmitLoading(true);
    const startValues = getHoursAndMinutes(values.startTime);
    const endValues = getHoursAndMinutes(values.endTime);

    if (!validateTime(startValues, endValues)) return;

    const startDate = new Date(date);
    startDate.setHours(startValues.hours);
    startDate.setMinutes(startValues.minutes);

    const endDate = new Date(date);
    endDate.setHours(endValues.hours);
    endDate.setMinutes(endValues.minutes);

    await LessonsAPI.createNewSlot(
      startDate,
      endDate,
      values.price,
      values.isOnline ? LessonType.Online : LessonType.Offline
    );
    setSubmitLoading(false);
    onClose();
  };

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => queryClient.invalidateQueries([lessonsKey]),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Formik
          onSubmit={(v: SlotInputValuesProps) => mutation.mutate(v)}
          initialValues={slotInputValues}
        >
          <Form>
            <ModalBody>
              <ModalHeader>
                Добавить новый слот на {dayAndMonth(date)}
              </ModalHeader>
              <ModalCloseButton />
              <FormControl isInvalid={!!formErrorMessage}>
                <HStack>
                  <NewSlotInputTime
                    label={'Начало'}
                    placeholder={'9:00'}
                    name={'startTime'}
                  />
                  <NewSlotInputTime
                    label={'Конец'}
                    placeholder={'10:30'}
                    name={'endTime'}
                  />
                  <NewSlotInputPrice
                    label={'₽ / час'}
                    placeholder={'1000 ₽'}
                    name={'price'}
                  />
                  <NewSlotInputSwitch
                    label={'Онлайн'}
                    placeholder={''}
                    name={'isOnline'}
                  />
                </HStack>
                <FormErrorMessage color={'red'}>
                  {formErrorMessage}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                type="submit"
                isLoading={isSubmitLoading}
              >
                Добавить
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Отмена
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  );
};
