import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Slot, SlotVariant } from '../../../components/Slot/Slot';
import { V1LessonDto } from '../../../api/models';
import { useSlot } from '../../../components/Slot/hooks/useSlot';

export const LessonsList: React.FC<Props> = ({
  lessons,
  slotVariant,
  title,
}) => {
  return (
    <Flex gap="20px" direction="column" w="100%">
      <Text variant="regular.h2">{title}</Text>
      <Flex width={'100%'} direction={'column'} gap="20px">
        {lessons.map((lesson) => {
          const { props } = useSlot(lesson, slotVariant);
          return <Slot {...props} key={lesson.id} />;
        })}
      </Flex>
    </Flex>
  );
};

type Props = {
  lessons: V1LessonDto[];
  slotVariant: SlotVariant;
  title: string;
};
