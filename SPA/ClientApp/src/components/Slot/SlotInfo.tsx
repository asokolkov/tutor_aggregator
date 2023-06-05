import * as React from 'react';
import { useContext } from 'react';
import { VStack } from '@chakra-ui/react';
import { PriceAndTypeInfo } from './PriceAndTypeInfo';
import { StudentName } from './StudentName';
import { ButtonGroupTutor } from './ButtonGroupTutor';
import { SlotContext } from './contexts/SlotContext';
import { ButtonGroupStudent } from './ButtonGroupStudent';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto } from '../../api/models';

export const SlotInfo: React.FC = () => {
  const { isBooked } = useContext(SlotContext);
  const { user } = useContext(UserContext);
  const isForTutor = user.accountType === V1AccountTypeDto.tutor;

  return (
    <VStack w="100%" spacing="0px">
      <PriceAndTypeInfo />
      {isBooked && isForTutor && <StudentName />}
      {isForTutor ? <ButtonGroupTutor /> : <ButtonGroupStudent />}
    </VStack>
  );
};
