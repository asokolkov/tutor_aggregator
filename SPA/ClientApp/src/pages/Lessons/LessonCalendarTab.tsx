import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { DayColumnWithSlots } from './components/LessonCalendarTab/DayColumnWithSlots';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { VStack } from '@chakra-ui/react';
import {
  useLessonTab,
  useWindowDimensions,
} from '../../components/LessonTab/useLessonTab';
import { PaginationMenu } from '../../components/LessonTab/PaginationMenu';
import { getShiftedDate } from '../../utils/datetime';

export const LessonCalendarTab: React.FC = () => {
  const [columnCount, setColumnCount] = useState(1);
  const dimensions = useWindowDimensions();

  const updateColumn = () => {
    const width = dimensions.width;
    if (width < 1024) setColumnCount(1);
    else if (width < 1440) setColumnCount(2);
    else if (width < 1920) setColumnCount(3);
    else if (width < 2560) setColumnCount(4);
    else setColumnCount(5);
  };

  useEffect(() => {
    updateColumn();
  }, [dimensions]);

  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);

  const [todayStartTime, setTodayStartTime] = useState(currentDate);
  const changeDate = (isForward: boolean) => {
    setTodayStartTime((prevDate) => {
      const newDate = new Date(prevDate);
      const delta = isForward ? columnCount : -columnCount;
      newDate.setDate(prevDate.getDate() + delta);
      return newDate;
    });
  };

  const { user } = useContext(UserContext);
  const userId = user.id;
  const { queries } = useLessonTab(userId, columnCount, todayStartTime);
  const isLoading = queries.some((query) => query.isLoading);

  return (
    <VStack spacing="20px">
      <PaginationMenu
        start={todayStartTime}
        end={getShiftedDate(todayStartTime, columnCount - 1)}
        onDateChange={changeDate}
        inCalendarPage={true}
      />

      {isLoading ? (
        <LoadBar description={'Загружаем данные ваших уроков'} />
      ) : (
        <div
          className="lessons-tab-container"
          style={{ columnRuleColor: 'blue.100' }}
        >
          {queries.map((query, i) => {
            const date = getShiftedDate(todayStartTime, i);
            return (
              <DayColumnWithSlots
                lessons={query.data}
                date={date}
                key={date.toString()}
              />
            );
          })}
        </div>
      )}
    </VStack>
  );
};
