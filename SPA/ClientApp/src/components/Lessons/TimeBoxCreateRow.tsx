import * as React from 'react';
import { Box, Flex, IconButton, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const TimeBoxCreateRow = () => {
  return (
    <Flex h={'32px'}>
      <Box
        borderRadius={'5px'}
        bg={'white'}
        w={'80px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Input h={'32px'} borderRadius={'5px 0 0 5px'} placeholder="13:45" />
      </Box>
      <Box h={'32px'} w={'24px'}>
        <IconButton
          borderRadius={'0 5px 5px 0'}
          bg={'#A1C0A0'}
          _hover={{ bg: '#789a77' }}
          _active={{ bg: '#477546' }}
          color={'white'}
          size={'xs'}
          h={'100%'}
          w={'100%'}
          aria-label="Добавить слот"
          icon={<AddIcon />}
        />
      </Box>
    </Flex>
  );
};
