import * as React from 'react';
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { dayAndMonth } from '../../YourLessonsTab/helper';
import { NewSlotInputTime } from '../DayColumn/NewSlotInputTime';
import { NewSlotInputPrice } from '../DayColumn/NewSlotInputPrice';
import { Form, Formik } from 'formik';
import LessonsAPI, { LessonType } from '../../../../api/lessons';
import { DisclosureProps } from './_shared';
import { slotInputValues, SlotInputValuesProps } from './_formikHelper';
import { useState } from 'react';

type Props = {
  disclosure: DisclosureProps;
  date: Date;
};

export const AddNewSlotModal: React.FC<Props> = ({ disclosure, date }) => {
  const { isOpen, onClose } = disclosure;
  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const getHoursAndMinutes = (forInput: string) => {
    const [hours, minutes] = forInput.split(':');
    return { hours: +hours, minutes: +minutes };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Formik
          onSubmit={async (values: SlotInputValuesProps) => {
            setSubmitLoading(true);
            const startValues = getHoursAndMinutes(values.startTime);
            const endValues = getHoursAndMinutes(values.endTime);

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
              LessonType.Offline
            );
            setSubmitLoading(false);
            onClose();
          }}
          initialValues={slotInputValues}
        >
          <Form>
            <ModalBody>
              <ModalHeader>
                Добавить новый слот на {dayAndMonth(date)}
              </ModalHeader>
              <ModalCloseButton />

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
              </HStack>
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
