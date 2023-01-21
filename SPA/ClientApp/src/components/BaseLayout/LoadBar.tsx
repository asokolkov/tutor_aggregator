import * as React from 'react';
import { CircularProgress, Flex } from '@chakra-ui/react';

export const LoadBar = () => {
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
};
