import * as React from 'react';
import { useAllLessonsQuery } from '../../query/useAllLessonsQuery';
import { Flex } from '@chakra-ui/react';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { LessonStatus } from '../../api/models';
import { LessonsList } from './components/LessonList';
import { SlotVariant } from '../../components/Slot/Slot';

export const ArchiveListTab: React.FC = () => {
  const { query } = useAllLessonsQuery();

  if (query.isLoading) return <LoadBar />;
  const data = query.data.filter((x) => x.status === LessonStatus.finished);
  return (
    <Flex w="50%">
      <LessonsList
        lessons={data}
        slotVariant={SlotVariant.pastList}
        title="Прошедшие занятия"
      />
    </Flex>
  );
};
