import * as React from 'react';
import { useState } from 'react';
import { useLessonTab } from '../Lessons/YourLessonsTab/useLessonTab';
import { Center, Divider, HStack, VStack } from '@chakra-ui/react';
import { PaginationMenu } from '../Lessons/components/PaginationMenu';
import { LoadBar } from '../sharedComponents/LoadBar/LoadBar';
import { useTutorId } from '../../routes/params';
import { DayColumnWithSlots } from './components/DayColumnWithSlots';
import { dateShift } from '../sharedComponents/Slot/_helpers';

const COLUMN_COUNT = 4;

export const TutorBookPage: React.FC = () => {
  const tutorId = useTutorId();

  const [currentDate, setCurrentDate] = useState(new Date());
  const changeDate = (isForward: boolean) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      const delta = isForward ? COLUMN_COUNT : -COLUMN_COUNT;
      newDate.setDate(prevDate.getDate() + delta);
      return newDate;
    });
  };

  const { queries } = useLessonTab(tutorId, COLUMN_COUNT, currentDate);
  const isLoading = queries.some((query) => query.isLoading);

  return (
    <VStack spacing="20px">
      <PaginationMenu
        start={currentDate}
        end={dateShift(currentDate, COLUMN_COUNT - 1)}
        onDateChange={changeDate}
      />
      {isLoading ? (
        <LoadBar description={'Загружаем данные уроков преподавателя'} />
      ) : (
        <HStack spacing="20px" align="stretch">
          <Center height="500px">
            <Divider orientation="vertical" />
          </Center>
          {queries.map((query, i) => (
            <>
              <DayColumnWithSlots
                lessons={query.data}
                date={dateShift(currentDate, i)}
              />
              <Center height="500px">
                <Divider orientation="vertical" />
              </Center>
            </>
          ))}
        </HStack>
      )}
    </VStack>
  );
};
