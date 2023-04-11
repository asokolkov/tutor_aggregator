import * as React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { DayColumnWithSlots } from '../components/DayColumn/DayColumnWithSlots';
import { LoadBar } from '../../sharedComponents/LoadBar';
import { Divider, HStack, VStack } from '@chakra-ui/react';
import { useLessonTab } from './useLessonTab';
import { PaginationMenu } from '../components/PaginationMenu';

export const YourLessonsTab: React.FC = () => {
  const { user } = useContext(UserContext);

  const userId = user.id;
  const columnCount = 2;
  const currentDate = new Date();

  const { query, endDate } = useLessonTab(userId, columnCount, currentDate);
  const { data, isLoading } = query;
  if (isLoading)
    return <LoadBar description={'Загружаем данные ваших уроков'} />;
  return (
    <VStack spacing="20px">
      <PaginationMenu start={currentDate} end={endDate} />
      <HStack spacing="20px" align="stretch">
        <DayColumnWithSlots lessons={data} date={currentDate} />;
        <Divider orientation="vertical" />
        <DayColumnWithSlots lessons={data} date={endDate} />;
      </HStack>
    </VStack>
  );
};
