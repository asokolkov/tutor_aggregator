import * as React from 'react';
import { useContext } from 'react';
import { SlotContext } from '../../contexts/SlotContext';
import { Stack, Text } from '@chakra-ui/react';

export const StudentName: React.FC = () => {
  const { student } = useContext(SlotContext);
  return (
    <Stack w="100%" p="4px 8px">
      <Text variant="semibold">{student.name || 'Неизвестно'}</Text>;
    </Stack>
  );
};
