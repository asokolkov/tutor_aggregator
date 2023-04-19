import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { PriceAndTypeInfo } from './PriceAndTypeInfo';
import { StudentName } from './StudentName';
import { ButtonGroupTutor } from './ButtonGroupTutor';
import { useContext } from 'react';
import { SlotContext } from '../../../contexts/SlotContext';
import { ButtonGroupStudent } from './ButtonGroupStudent';

export const SlotInfo: React.FC = () => {
  const { isBooked, isForTutor } = useContext(SlotContext);
  return (
    <VStack w="100%" spacing="0px">
      <PriceAndTypeInfo />
      {isBooked && isForTutor && <StudentName />}
      {isForTutor ? <ButtonGroupTutor /> : <ButtonGroupStudent />}
    </VStack>
  );
};
