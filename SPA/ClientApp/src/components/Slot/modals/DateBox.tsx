import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { SlotContext } from '../contexts/SlotContext';
import { Color } from '../../../assets/theme/themeEnum';

export const DateBox: React.FC = () => {
  const { dateAndDay } = useContext(SlotContext);
  return (
    <Flex w="100%" bg={Color.green} h="32px" align="center">
      <Text m="0 8px" color="white" variant="regular.bold">
        {dateAndDay}
      </Text>
    </Flex>
  );
};
