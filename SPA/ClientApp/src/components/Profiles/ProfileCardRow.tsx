// @flow
import * as React from 'react';
import { HStack, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  other: JSX.Element[];
};
export const ProfileCardRow: React.FC<Props> = ({ title, other }) => {
  return (
    <HStack spacing={'12px'} align={'start'}>
      <Text w={'200px'}>{title}</Text>
      {other}
    </HStack>
  );
};
