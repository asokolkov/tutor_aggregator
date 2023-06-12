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
import { MdPhone, MdEmail } from 'react-icons/md';
import { useContext } from 'react';
import { ContactModalContext } from './contexts/ContactModalContext';

export const ContactsModal: React.FC<Props> = (props) => {
  const { isOpen, onClose } = props.disclosure;
  const contactModalContext = useContext(ContactModalContext);
  const contacts = props.contacts ?? contactModalContext.contacts ?? [];
  const contactsByType = (type: V1ContactTypeDto) => {
    return contacts.filter((x) => x.type === type)[0]?.value;
  };

  const telegram = contactsByType(V1ContactTypeDto.telegram);
  const phone = contactsByType(V1ContactTypeDto.phone);
  const mail = contactsByType(V1ContactTypeDto.email);

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
              text={telegram}
              link={`https://t.me/${telegram}`}
            />
            <InfoWithIcon
              Icon={MdEmail}
              categoryText="Почта"
              text={mail}
              link={`mailto://${mail}`}
            />
            <InfoWithIcon
              Icon={MdPhone}
              categoryText="Телефон"
              text={phone}
              link={`tel://${phone}`}
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
  contacts?: V1ContactsDto[];
};
