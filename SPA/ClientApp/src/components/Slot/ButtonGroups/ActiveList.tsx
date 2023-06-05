import * as React from 'react';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { CancelLessonModal } from '../modals/CancelLessonModal';

export const ActiveList: React.FC = () => {
  const disclosure = useDisclosure();
  return (
    <>
      <CancelLessonModal disclosure={disclosure} />
      <HStack w="100%" p="8px" spacing="4px">
        <Button rightIcon={<ChatIcon />} flexGrow="1" h="30px" variant="green">
          Показать контакты
        </Button>

        <Button
          rightIcon={<CloseIcon />}
          h="30px"
          onClick={disclosure.onOpen}
          variant="red"
        >
          Отменить
        </Button>
      </HStack>
    </>
  );
};
