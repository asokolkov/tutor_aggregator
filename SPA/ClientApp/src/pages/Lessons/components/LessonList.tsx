import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Slot, SlotVariant } from '../../../components/Slot/Slot';
import { MapSlot } from '../../../components/Slot/_maper';
import { V1LessonDto } from '../../../api/models';

export const LessonsList: React.FC<Props> = ({
  lessons,
  slotVariant,
  title,
}) => {
  return (
    <Flex gap="20px" direction="column" w="100%">
      <Text variant="regular.h2">{title}</Text>
      {lessons.map((lesson) => (
        <Slot {...MapSlot(lesson, slotVariant)} />
      ))}
    </Flex>
  );
};

type Props = {
  lessons: V1LessonDto[];
  slotVariant: SlotVariant;
  title: string;
};
