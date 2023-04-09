import * as React from 'react';
import { Flex, VStack, Text } from '@chakra-ui/react';

export const Title: React.FC = () => {
  return (
    <Flex justify={'space-between'} align={'center'} w="100%">
      <VStack spacing="0">
        <Text variant="big-semibold">20.03</Text>
        <Text>понедельник</Text>
      </VStack>
      <Text>Занято: 3 / 5</Text>
    </Flex>
  );
};
