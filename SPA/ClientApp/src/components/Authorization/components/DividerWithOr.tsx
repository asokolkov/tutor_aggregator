import * as React from 'react';
import { Divider, HStack, Text } from '@chakra-ui/react';

export const DividerWithOr: React.FC = () => {
  return (
    <HStack margin={'10px'}>
      <Divider />
      <Text fontSize="sm" whiteSpace="nowrap" color="muted">
        или
      </Text>
      <Divider />
    </HStack>
  );
};
