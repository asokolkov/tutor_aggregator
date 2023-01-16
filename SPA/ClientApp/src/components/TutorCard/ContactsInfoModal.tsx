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
} from '@chakra-ui/react';
import { Contact } from '../../apis/_share';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  contacts: Contact[];
}

const ContactsInfoModal: React.FC<Props> = ({ isOpen, onClose, contacts }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Контакты репититора</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {contacts.map((c) => (
            <p key={c.id}>{c.value}</p>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactsInfoModal;
