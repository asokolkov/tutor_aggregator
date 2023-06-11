import * as React from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useAllLessonsQuery } from '../../query/useAllLessonsQuery';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { LessonStatus } from '../../api/models';
import { SlotVariant } from '../../components/Slot/Slot';
import { Color } from '../../assets/theme/themeEnum';
import { LessonsList } from './components/LessonList';

export const ActiveListTab: React.FC = () => {
  const { query } = useAllLessonsQuery();
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  if (query.isLoading) return <LoadBar />;
  const data = query.data.filter((x) => x.status === LessonStatus.booked);
  const closeData = data.slice(0, 3);
  return (
    <Flex gap="30px" direction={!isLargerThan1024 ? 'column' : 'row'}>
      <LessonsList
        lessons={closeData}
        slotVariant={SlotVariant.activeCloseList}
        title="Ближайшие занятия"
      />
      <Box
        backgroundColor={Color.blue300}
        w="1px"
        flexShrink="0"
        display={isLargerThan1024 ? 'block' : 'none'}
      />
      <LessonsList
        lessons={data}
        slotVariant={SlotVariant.activeAllList}
        title="Все занятия"
      />
    </Flex>
  );
};
