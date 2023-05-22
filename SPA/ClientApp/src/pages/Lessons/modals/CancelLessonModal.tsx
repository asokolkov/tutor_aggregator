import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CancelLessonModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Вы уверены что хотите отменить запись?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
            Назад
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Отменить запись
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CancelLessonModal;
