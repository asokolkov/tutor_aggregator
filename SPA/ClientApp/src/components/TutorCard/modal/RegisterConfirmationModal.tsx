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
  Text,
  Divider,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tutorName: string;
  signupDatetimes: string[];
}

const RegisterConfirmationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  tutorName,
  signupDatetimes,
}) => {
  const datetimeColumn = signupDatetimes.map((datetime) => (
    <Text>{datetime}</Text>
  ));
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'xl'}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Подтверждение записи</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as={'b'}>👤 Запись к репетитору:</Text>
          <Text>{tutorName}</Text>
          <Divider margin={'1em 0 1em 0'} color={'gray'} />
          <Text as={'b'}>🗓 Выбранное время:</Text> {datetimeColumn}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" variant="outline" mr={3} onClick={onClose}>
            Отменить
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Подтвердить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterConfirmationModal;
