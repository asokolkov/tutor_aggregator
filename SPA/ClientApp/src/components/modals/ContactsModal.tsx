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
import { V1ContactsDto, V1ContactTypeDto } from '../../api/models';
import { IoMdMail } from 'react-icons/io';
import { BsTelephoneOutboundFill } from 'react-icons/bs';

export const ContactsModal: React.FC<Props> = ({ disclosure, contacts }) => {
  const { isOpen, onClose } = disclosure;
  const contactsByType = (type: V1ContactTypeDto) =>
    contacts
      .filter((x) => x.type === type)
      .map((x) => (type === V1ContactTypeDto.telegram ? '@' : '') + x.value)
      .join(', ');

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
              text={contactsByType(V1ContactTypeDto.telegram)}
            />
            <InfoWithIcon
              Icon={IoMdMail}
              categoryText="Почта"
              text={contactsByType(V1ContactTypeDto.email)}
            />
            <InfoWithIcon
              Icon={BsTelephoneOutboundFill}
              categoryText="Телефон"
              text={contactsByType(V1ContactTypeDto.phone)}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="green" onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

type Props = {
  disclosure: DisclosureProps;
  contacts: V1ContactsDto[];
};
