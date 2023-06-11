import * as React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import { useDataForModal } from '../hooks/useDataForModal';

export const ActiveList: React.FC = () => {
  const { setData, cancelDisc } = useContext(ModalContext);
  const { data } = useDataForModal();
  const onClick = () => {
    setData(data);
    cancelDisc.onOpen();
  };
  return (
    <HStack w="100%" p="8px" spacing="4px">
      <Button rightIcon={<ChatIcon />} flexGrow="1" h="30px" variant="green">
        Показать контакты
      </Button>

      <Button
        rightIcon={<CloseIcon />}
        h="30px"
        onClick={onClick}
        variant="red"
      >
        Отменить
      </Button>
    </HStack>
  );
};
