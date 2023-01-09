import * as React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { SelectOptions } from './SelectOptions';

type Props = {};
const SearchParamsSection: React.FC<Props> = () => {
  return (
    <VStack
      divider={<StackDivider borderColor={'gray.200'} />}
      borderRadius={'5px'}
      borderWidth={'1px'}
      shadow={'md'}
      width={'100%'}
    >
      <HStack margin={'20px'} spacing={15} width={'90%'} align={'flex-end'}>
        <FormControl>
          <FormLabel></FormLabel>
          <Input type="search" placeholder="Найти наставника" />
        </FormControl>
        <Button colorScheme={'blue'} width={'240px'} margin={'auto 0'}>
          Найти
        </Button>
        <FormControl>
          <FormLabel>Цена за занятие</FormLabel>
          <NumberInput step={100} max={5000} min={200}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </HStack>
      <HStack margin={'20px'} width={'90%'} spacing={15}>
        <SelectOptions
          title={'Город'}
          placeholder={'Екатеринбург'}
          options={['Верхняя Пышма', 'Первоуральск']}
        />

        <SelectOptions
          title={'Район'}
          placeholder={'Ленинский'}
          options={['Чкаловский', 'Верх-Исетский']}
        />

        <SelectOptions
          title={'Предметная область'}
          placeholder={'Программирование'}
          options={['Математика', 'История']}
        />
      </HStack>
    </VStack>
  );
};

export default SearchParamsSection;
