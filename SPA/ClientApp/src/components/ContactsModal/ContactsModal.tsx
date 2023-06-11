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
  const contactsByType = (type: V1ContactTypeDto) => {
    const singleContact = contacts.filter((x) => x.type === type)[0]?.value;
    if (!singleContact) return undefined;
    switch (type) {
      case V1ContactTypeDto.phone:
        return '+7' + singleContact;
      case V1ContactTypeDto.telegram:
        return '@' + singleContact;
    }
    return singleContact;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Контакты</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing="16px">
            <InfoWithIcon
              Icon={SiTelegram}
              categoryText="Телеграм"
              text={contactsByType(V1ContactTypeDto.telegram) || 'Не указано'}
            />
            <InfoWithIcon
              Icon={MdEmail}
              categoryText="Почта"
              text={contactsByType(V1ContactTypeDto.email) || 'Не указано'}
            />
            <InfoWithIcon
              Icon={MdPhone}
              categoryText="Телефон"
              text={contactsByType(V1ContactTypeDto.phone) || 'Не указано'}
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
