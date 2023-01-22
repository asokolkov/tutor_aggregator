import * as React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export const TimeBox = (props: TimeBoxProps) => {
  let timeWidth = props.isCancellableEditor ? '80px' : '104px';
  let timeBorderRadius = props.isCancellableEditor ? '5px 0 0 5px' : '5px';
  let timeBackground = props.isCancellableEditor ? '#A0AEC0' : '#A1C0A0';
  return (
    <Flex h={'32px'} margin={'0 0 5px 0'}>
      <Box
        borderRadius={timeBorderRadius}
        bg={timeBackground}
        w={timeWidth}
        display={'flex'}
        justifyContent={'center'}
      >
        <Text
          textColor={'white'}
          size={'sm'}
          textAlign={'center'}
          margin={'auto'}
          as={'b'}
        >
          {props.time}
        </Text>
      </Box>
      {props.isCancellableEditor && (
        <Box h={'32px'} w={'24px'}>
          <IconButton
            borderRadius={'0 5px 5px 0'}
            bg={'#9E616A'}
            _hover={{ bg: '#884550' }}
            _active={{ bg: '#57262d' }}
            color={'white'}
            size={'xs'}
            h={'100%'}
            w={'100%'}
            aria-label="Удалить слот"
            icon={<CloseIcon />}
          />
        </Box>
      )}
    </Flex>
  );
};

type TimeBoxProps = {
  time: string;
  isLockedEditor?: boolean;
  isCancellableEditor?: boolean;
  isFreePicker?: boolean;
  isChosenPicker?: boolean;
};
