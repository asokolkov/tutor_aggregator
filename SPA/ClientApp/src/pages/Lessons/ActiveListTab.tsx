import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useAllLessonsQuery } from '../../query/useAllLessonsQuery';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { V1LessonDto } from '../../api/models';
import { Slot, SlotVariant } from '../../components/Slot/Slot';
import { MapSlot } from '../../components/Slot/_maper';
import { Color } from '../../assets/theme/themeEnum';

export const ActiveListTab: React.FC = () => {
  const { query } = useAllLessonsQuery();

  if (query.isLoading) return <LoadBar />;
  return (
    <Flex gap="30px">
      <LessonsList
        lessons={query.data.slice(0, 3)}
        slotVariant={SlotVariant.activeCloseList}
        title="Ближайшие занятия"
      />
      <Box backgroundColor={Color.blue300} w="1px" flexShrink="0"></Box>
      <LessonsList
        lessons={query.data}
        slotVariant={SlotVariant.activeAllList}
        title="Все занятия"
      />
    </Flex>
  );
};

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
