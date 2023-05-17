import * as React from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useField } from 'formik';

export const ReviewModalForm: React.FC = () => {
  const [ratingField] = useField({ name: 'rating' });
  const [textField] = useField({ name: 'text' });

  return (
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
            placeholder="5"
            bg="white"
            color={'#000000'}
            width="100%"
            fontSize="md"
            {...ratingField}
          >
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
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
            {...textField}
          />
        </Flex>
      </Flex>
    </FormControl>
  );
};
