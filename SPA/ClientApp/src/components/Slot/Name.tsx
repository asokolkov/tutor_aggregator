import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from './contexts/SlotContext';
import { Stack, Text } from '@chakra-ui/react';
import { SlotVariant } from './Slot';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto } from '../../api/models';

export const Name: React.FC = () => {
  const { studentName, tutorName, variant } = useContext(SlotContext);
  const { user } = useContext(UserContext);
  const isTutor = user.accountType === V1AccountTypeDto.tutor;

  let name: string;
  if (variant === SlotVariant.tutorCalendar) name = studentName;
  else if (variant === SlotVariant.studentCalendar) name = tutorName;
  else name = isTutor ? studentName : tutorName;

  return (
    <Stack maxW={'100%'} w={'100%'} p="4px 8px">
      <Text
        variant="regular.bold"
        color={'custom.blue.300'}
        wordBreak={'break-all'}
      >
        {name || 'Неизвестно'}
      </Text>
      ;
    </Stack>
  );
};
