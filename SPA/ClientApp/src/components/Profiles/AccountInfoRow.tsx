import React from 'react';
import { HStack, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  otherJsx: JSX.Element[];
}
const AccountInfoRow: React.FC<Props> = ({ title, otherJsx }) => {
  return (
    <HStack spacing={'16px'} align={'start'}>
      <Text w={'200px'}>{title}</Text>
      {otherJsx}
    </HStack>
  );
};

export default AccountInfoRow;
