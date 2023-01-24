import * as React from 'react';
import { Box, Flex, IconButton, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import {useRef} from "react";

export const TimeBoxCreateRow = ({columnLabel, slots, removeSlot} : any) => {
    const inputRef = useRef(null);
    
    function aa() {
        if (inputRef.current.value)
            removeSlot(columnLabel, [...slots, {time: inputRef.current.value, isLocked: false}]);
    }

    return (
    <Flex h={'32px'}>
      <Box
        borderRadius={'5px'}
        bg={'white'}
        w={'80px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Input h={'32px'} borderRadius={'5px 0 0 5px'} placeholder="13:45" ref={inputRef} />
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
          onClick={aa}
        />
      </Box>
    </Flex>
  );
};
