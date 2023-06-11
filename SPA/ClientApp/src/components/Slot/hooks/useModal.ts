import { useState } from 'react';
import { ModalData } from '../contexts/ModalContext';
import { useDisclosure } from '@chakra-ui/react';

export function useModal() {
  const [data, setData] = useState<ModalData>();
  const cancelDisc = useDisclosure();
  const bookDisc = useDisclosure();
  const deleteDisc = useDisclosure();
  const modalProviderValue = {
    data,
    setData,
    cancelDisc,
    bookDisc,
    deleteDisc,
  };
  return { modalProviderValue };
}
