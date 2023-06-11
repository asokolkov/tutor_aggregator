import * as React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { DisclosureProps } from '../disclosureProps';
import InfoWithIcon from '../InfoWithIcon';
import { SiTelegram } from 'react-icons/si';
import { V1ContactTypeDto } from '../../api/models';
import { MdPhone, MdEmail } from 'react-icons/md';
import { useContext } from 'react';
import { ContactModalContext } from './contexts/ContactModalContext';

export const ContactsModal: React.FC<Props> = ({ disclosure }) => {
  const { isOpen, onClose } = disclosure;
  const { contacts } = useContext(ContactModalContext);
  const contactsByType = (type: V1ContactTypeDto) =>
    contacts
      .filter((x) => x.type === type)
      .map((x) => (type === V1ContactTypeDto.telegram ? '@' : '') + x.value)
      .join(', ');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Контакты преподавателя</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing="16px">
            <InfoWithIcon
              Icon={SiTelegram}
              categoryText="Телеграм"
              text={contactsByType(V1ContactTypeDto.telegram)}
            />
            <InfoWithIcon
              Icon={MdEmail}
              categoryText="Почта"
              text={contactsByType(V1ContactTypeDto.email)}
            />
            <InfoWithIcon
              Icon={MdPhone}
              categoryText="Телефон"
              text={contactsByType(V1ContactTypeDto.phone)}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="blue.100" onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

type Props = {
  disclosure: DisclosureProps;
};
