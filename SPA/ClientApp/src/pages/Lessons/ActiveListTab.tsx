import * as React from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { useAllLessonsQuery } from '../../query/useAllLessonsQuery';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { LessonStatus } from '../../api/models';
import { SlotVariant } from '../../components/Slot/Slot';
import { LessonsList } from './components/LessonList';

export const ActiveListTab: React.FC = () => {
  const { query } = useAllLessonsQuery();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  if (query.isLoading) return <LoadBar />;
  const data = query.data.filter((x) => x.status === LessonStatus.booked);
  const closeData = data.slice(0, 3);
  return (
    <Flex gap="40px" direction={isLargerThanTablet ? 'row' : 'column'}>
      <LessonsList
        lessons={closeData}
        slotVariant={SlotVariant.activeCloseList}
        title="Ближайшие занятия"
      />
      <LessonsList
        lessons={data}
        slotVariant={SlotVariant.activeAllList}
        title="Все занятия"
      />
    </Flex>
  );
};
