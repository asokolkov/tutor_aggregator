import * as React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export const TimeBox = (props: TimeBoxProps) => {
  let timeWidth = !props.slot.isLocked ? '80px' : '104px';
  let timeBorderRadius = !props.slot.isLocked ? '5px 0 0 5px' : '5px';
  let timeBackground = !props.slot.isLocked ? '#A0AEC0' : '#A1C0A0';
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
          {props.slot.time}
        </Text>
      </Box>
      {!props.slot.isLocked && (
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
            onClick={() =>
              props.removeSlot(
                props.columnLabel,
                props.slots.filter((e: any) => e !== props.slot)
              )
            }
          />
        </Box>
      )}
    </Flex>
  );
};

type TimeBoxProps = {
  columnLabel: any;
  slots: any;
  slot: any;
  removeSlot: any;
};
