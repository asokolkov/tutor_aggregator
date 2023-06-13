import * as React from 'react';
import { useAllLessonsQuery } from '../../query/useAllLessonsQuery';
import { Flex } from '@chakra-ui/react';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { LessonStatus } from '../../api/models';
import { LessonsList } from './components/LessonList';
import { SlotVariant } from '../../components/Slot/Slot';
import { ReviewModalContext } from '../../components/ReviewModal/contexts/ReviewModalContext';
import { useReviewModal } from '../../components/ReviewModal/hooks/useReviewModal';
import { ReviewModal } from '../../components/ReviewModal/ReviewModal';
import { EmptyLessonList } from './components/EmptyLessonList';

export const ArchiveListTab: React.FC = () => {
  const { query } = useAllLessonsQuery();
  const { providerValue } = useReviewModal();

  if (query.isLoading) return <LoadBar />;
  const data = query.data.filter((x) => x.status === LessonStatus.expiredBooked);
  if (data.length === 0) return <EmptyLessonList />;
  return (
    <ReviewModalContext.Provider value={providerValue}>
      <ReviewModal disclosure={providerValue.disclosure} />
      <Flex w="50%">
        <LessonsList
          lessons={data}
          slotVariant={SlotVariant.pastList}
          title="Прошедшие занятия"
        />
      </Flex>
    </ReviewModalContext.Provider>
  );
};
