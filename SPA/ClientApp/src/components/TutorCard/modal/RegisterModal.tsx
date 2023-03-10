import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import RegisterConfirmationModal from './RegisterConfirmationModal';
import { TimeBoxRow } from '../components/TimeBoxRow';
import moment from 'moment/moment';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function getNextNDays(daysRequired: number): string[] {
  let days = [];
  for (let i = 0; i < daysRequired; i++) {
    days.push(moment().add(i, 'days').format('DD.MM'));
  }
  return days;
}

const RegisterModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    isOpen: isOpenConfirmation,
    onOpen: onOpenConfirmation,
    onClose: onCloseConfirmation,
  } = useDisclosure();
  function continueEvent() {
    onClose();
    onOpenConfirmation();
  }
  const nextDays = getNextNDays(7);
  return (
    <>
      <RegisterConfirmationModal
        isOpen={isOpenConfirmation}
        onClose={onCloseConfirmation}
        tutorName={'Павел Егоров'}
        signupDatetimes={['12.11.2001, 9:00', '23.01.2023, 12:30']}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size={'2xl'}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Выбрать слот для записи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={'column'}>
              <TimeBoxRow
                rowLabel={nextDays[0]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: false },
                  { time: '12:30', isAvailable: false },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
              <Divider margin={'0 0 13px 0'} colorScheme={'gray'} />
              <TimeBoxRow
                rowLabel={nextDays[1]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: true },
                  { time: '12:30', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
              <Divider margin={'0 0 13px 0'} colorScheme={'gray'} />
              <TimeBoxRow
                rowLabel={nextDays[2]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: true },
                  { time: '12:30', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
              <Divider margin={'0 0 13px 0'} colorScheme={'gray'} />
              <TimeBoxRow
                rowLabel={nextDays[3]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: true },
                  { time: '12:30', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
              <Divider margin={'0 0 13px 0'} colorScheme={'gray'} />
              <TimeBoxRow
                rowLabel={nextDays[4]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: true },
                  { time: '12:30', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
              <Divider margin={'0 0 13px 0'} colorScheme={'gray'} />
              <TimeBoxRow
                rowLabel={nextDays[5]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: true },
                  { time: '12:30', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
              <Divider margin={'0 0 13px 0'} colorScheme={'gray'} />
              <TimeBoxRow
                rowLabel={nextDays[6]}
                slots={[
                  { time: '09:30', isAvailable: true },
                  { time: '11:00', isAvailable: true },
                  { time: '12:30', isAvailable: true },
                  { time: '14:00', isAvailable: true },
                ]}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Отменить
            </Button>
            <Button colorScheme="blue" onClick={continueEvent}>
              Продолжить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
