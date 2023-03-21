import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  ModalBody,
  FormLabel,
  Textarea,
  FormControl,
  Select,
  Flex,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewReviewModal: React.FC<Props> = ({ isOpen, onClose }) => {
  /* eslint-disable-next-line max-len */
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Оставить отзыв</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl alignItems={'center'}>
            <Flex direction={'column'} width={'100%'}>
              <Flex>
                <FormLabel
                  fontSize={'md'}
                  margin={'auto 10px auto 0'}
                  flex={'0 0 130px'}
                  textAlign={'right'}
                >
                  Оценка
                </FormLabel>
                <Select
                  placeholder={'5'}
                  bg="white"
                  color={'#000000'}
                  width={'100%'}
                  fontSize={'md'}
                >
                  <option value={'4'}>4</option>
                  <option value={'3'}>3</option>
                  <option value={'2'}>2</option>
                  <option value={'1'}>1</option>
                </Select>
              </Flex>
              <Flex margin={'1em 0 0 0'}>
                <FormLabel
                  fontSize={'md'}
                  margin={'auto 10px auto 0'}
                  flex={'0 0 130px'}
                  textAlign={'right'}
                >
                  Комментарий
                </FormLabel>
                <Textarea
                  placeholder="Очень понравились практики от преподавателя, за два занятия понял, что такое C#!"
                  bg="white"
                  color="black"
                  width={'100%'}
                  height={'20vh'}
                  fontSize={'lg'}
                  size={'md'}
                  resize={'vertical'}
                />
              </Flex>
            </Flex>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
            Назад
          </Button>
          <Button colorScheme="green" onClick={onClose}>
            Отправить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewReviewModal;
