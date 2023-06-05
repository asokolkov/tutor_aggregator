import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from './contexts/SlotContext';
import { Stack, Text } from '@chakra-ui/react';
import { SlotVariant } from './Slot';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto } from '../../api/models';

export const Name: React.FC = () => {
  const { student, tutorName, variant } = useContext(SlotContext);
  const { user } = useContext(UserContext);
  const isTutor = user.accountType === V1AccountTypeDto.tutor;

  let name: string;
  if (variant === SlotVariant.tutorCalendar) name = student.name;
  else if (variant === SlotVariant.studentCalendar) name = tutorName;
  else name = isTutor ? student.name : tutorName;

  return (
    <Stack w="100%" p="4px 8px">
      <Text variant="regular.bold">{name || 'Неизвестно'}</Text>;
    </Stack>
  );
};
