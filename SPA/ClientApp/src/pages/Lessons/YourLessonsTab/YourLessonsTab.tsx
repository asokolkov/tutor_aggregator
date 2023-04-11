import * as React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { DayColumnWithSlots } from '../components/DayColumn/DayColumnWithSlots';
import { LoadBar } from '../../sharedComponents/LoadBar';
import { HStack, VStack } from '@chakra-ui/react';
import { useLessonTab } from './useLessonTab';
import { PaginationMenu } from '../components/PaginationMenu';
import { dateShift } from './helper';

export const YourLessonsTab: React.FC = () => {
  const { user } = useContext(UserContext);

  const userId = user.id;
  const columnCount = 2;
  const currentDate = new Date();

  const { queries } = useLessonTab(userId, columnCount, currentDate);
  const isLoading = queries.some((query) => query.isLoading);

  if (isLoading)
    return <LoadBar description={'Загружаем данные ваших уроков'} />;

  return (
    <VStack spacing="20px">
      <PaginationMenu
        start={currentDate}
        end={dateShift(currentDate, columnCount - 1)}
      />
      <HStack spacing="20px" align="stretch">
        {queries.map((query, i) => (
          <DayColumnWithSlots
            lessons={query.data}
            date={dateShift(currentDate, i)}
          />
        ))}
      </HStack>
    </VStack>
  );
};
