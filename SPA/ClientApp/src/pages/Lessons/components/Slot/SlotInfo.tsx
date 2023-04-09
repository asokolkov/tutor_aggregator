import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { PriceAndTypeInfo } from './PriceAndTypeInfo';
import { StudentName } from './StudentName';
import { ButtonGroup } from './ButtonGroup';
import { useContext } from 'react';
import { SlotContext } from '../../../../contexts/SlotContext';

export const SlotInfo: React.FC = () => {
  const { isBooked } = useContext(SlotContext);
  return (
    <VStack w="100%" spacing="0px">
      <PriceAndTypeInfo />
      {isBooked && <StudentName />}
      <ButtonGroup />
    </VStack>
  );
};
