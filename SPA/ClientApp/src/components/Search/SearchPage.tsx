import {
  ChakraProvider,
  Flex,
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
  Heading,
  Button,
  CircularProgress,
  Grid,
} from '@chakra-ui/react';
import Theme from '../../theme/index';
import { SearchCardInfo } from './SearchCardInfo';
import { SelectOptions } from './SelectOptions';
import { useEffect, useState } from 'react';

export const SearchPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('./api/v1/tutors')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (e) => {
          setIsLoaded(true);
          setError(e);
        }
      );
  }, []);

  if (!isLoaded)
    return (
      <Flex align={'center'} justify={'center'}>
        <CircularProgress
          isIndeterminate
          color="teal"
          size={'100px'}
          value={25}
          thickness="12px"
        />
      </Flex>
    );
  return (
    <ChakraProvider theme={Theme}>
      <Flex background={'white'} direction={'column'}>
        <Heading as="h3" size="xl" margin={'0 3% 0 3%'}>
          Поиск наставника
        </Heading>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          background={'white'}
          borderRadius={'5px'}
          borderWidth={'1px'}
          margin={'3%'}
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
        <VStack>
          <Grid templateColumns="repeat(3, 300px)" gap={6}>
            {items.map((item) => (
              <SearchCardInfo
                name={item.firstName + ' ' + item.lastName}
                imgSrc={item.avatar}
                job={'Тут будет место работы'}
                occupation={'Тут будет род деятельности'}
                rating={{ count: 25, average: item.rating }}
              ></SearchCardInfo>
            ))}
          </Grid>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};
