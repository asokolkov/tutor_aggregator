import * as React from 'react';
import { FormControl, FormLabel, Flex, Input, Text } from '@chakra-ui/react';

export const PriceInputRow = (props: PriceInputRowProps) => {
  return (
    <Flex width={'50%'} margin={'0 0 20px 0'} align={'center'}>
      <FormControl display={'flex'} alignItems={'center'}>
        <FormLabel
          fontSize={'sm'}
          textAlign={'right'}
          margin={'auto 10px auto 0'}
          flex={'0 0 128px'}
          justifyContent={'center'}
        >
          Цена за 60 минут:
        </FormLabel>
        <Input
          value={props.value}
          placeholder={'1000'}
          bg="white"
          color={'#000000'}
          width={'100px'}
          fontSize={'lg'}
          size={'sm'}
        />
        <Text fontSize={'md'} margin={'0 0 0 10px'}>
          ₽
        </Text>
      </FormControl>
    </Flex>
  );
};

type PriceInputRowProps = {
  value?: string;
};
