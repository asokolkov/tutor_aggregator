import * as React from 'react';
import { FormControl, FormLabel, Flex, Text } from '@chakra-ui/react';

type Props = {
  label: string;
  text: string;
};

export const TextRow: React.FC<Props> = (props) => {
  return (
    <Flex>
      <FormControl display={'flex'}>
        <FormLabel
          fontSize={'xl'}
          margin={'auto 10px auto 0'}
          flex={'0 0 130px'}
        >
          {props.label}
        </FormLabel>
        <Text
          bg="white"
          color={'#000000'}
          width={'50%'}
          fontSize={'lg'}
          size={'md'}
          padding={'0 0 0 1em'}
        >
          {props.text}
        </Text>
      </FormControl>
    </Flex>
  );
};
