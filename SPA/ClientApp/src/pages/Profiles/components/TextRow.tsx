import * as React from 'react';
import { FormControl, FormLabel, Flex, Text } from '@chakra-ui/react';

type Props = {
  label: string;
  text: string;
};

export const TextRow: React.FC<Props> = (props) => {
  return (
    <Flex margin={'0 0 10px 0 !important'}>
      <FormControl display={'flex'} alignItems={'baseline'}>
        <FormLabel margin={'0 10px 0 0'} width={'auto'}>
          <Text variant={'regular.bold'}>{props.label}</Text>
        </FormLabel>
        <Text color={'custom.blue.300'} fontSize={'16px'}>
          {props.text}
        </Text>
      </FormControl>
    </Flex>
  );
};
