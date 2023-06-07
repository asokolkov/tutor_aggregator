import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useAllLessonsQuery } from '../../query/useAllLessonsQuery';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { LessonStatus } from '../../api/models';
import { SlotVariant } from '../../components/Slot/Slot';
import { Color } from '../../assets/theme/themeEnum';
import { LessonsList } from './components/LessonList';

export const ActiveListTab: React.FC = () => {
  const { query } = useAllLessonsQuery();

  if (query.isLoading) return <LoadBar />;
  const data = query.data.filter((x) => x.status === LessonStatus.booked);
  const closeData = data.slice(0, 3);
  return (
    <Flex gap="30px">
      <LessonsList
        lessons={closeData}
        slotVariant={SlotVariant.activeCloseList}
        title="Ближайшие занятия"
      />
      <Box backgroundColor={Color.blue300} w="1px" flexShrink="0"></Box>
      <LessonsList
        lessons={data}
        slotVariant={SlotVariant.activeAllList}
        title="Все занятия"
      />
    </Flex>
  );
};
