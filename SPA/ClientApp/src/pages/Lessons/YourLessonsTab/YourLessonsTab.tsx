import * as React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { DayColumnWithSlots } from '../components/DayColumn/DayColumnWithSlots';
import { LoadBar } from '../../sharedComponents/LoadBar/LoadBar';
import { Center, Divider, HStack, VStack } from '@chakra-ui/react';
import { useLessonTab } from './useLessonTab';
import { PaginationMenu } from '../components/PaginationMenu';
import { dateShift } from './helper';

const COLUMN_COUNT = 4;

export const YourLessonsTab: React.FC = () => {
  const { user } = useContext(UserContext);
  const userId = user.id;

  const [currentDate, setCurrentDate] = useState(new Date());
  const changeDate = (isForward: boolean) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      const delta = isForward ? COLUMN_COUNT : -COLUMN_COUNT;
      newDate.setDate(prevDate.getDate() + delta);
      return newDate;
    });
  };

  const { queries } = useLessonTab(userId, COLUMN_COUNT, currentDate);
  const isLoading = queries.some((query) => query.isLoading);

  return (
    <VStack spacing="20px">
      <PaginationMenu
        start={currentDate}
        end={dateShift(currentDate, COLUMN_COUNT - 1)}
        onDateChange={changeDate}
      />
      {isLoading ? (
        <LoadBar description={'Загружаем данные ваших уроков'} />
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
