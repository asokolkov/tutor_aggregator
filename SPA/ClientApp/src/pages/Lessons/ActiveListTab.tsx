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
      <NearLessons lessons={query.data.slice(0, 3)} />
      <Box backgroundColor={Color.blue300} w="1px" flexShrink="0"></Box>
      <AllLessons lessons={query.data} />
    </Flex>
  );
};

export const NearLessons: React.FC<Props> = ({ lessons }) => {
  return (
    <Flex gap="20px" direction="column" w="100%">
      <Text variant="regular.h2">Ближайшие занятия</Text>
      {lessons.map((lesson) => (
        <Slot {...MapSlot(lesson, SlotVariant.activeList)} />
      ))}
    </Flex>
  );
};

export const AllLessons: React.FC<Props> = ({ lessons }) => {
  return (
    <Flex gap="20px" direction="column" w="100%">
      <Text variant="regular.h2">Все занятия</Text>
      {lessons.map((lesson) => (
        <Slot {...MapSlot(lesson, SlotVariant.activeList)} />
      ))}
    </Flex>
  );
};

type Props = {
  lessons: V1LessonDto[];
};
