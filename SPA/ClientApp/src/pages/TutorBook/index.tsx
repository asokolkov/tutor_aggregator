import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import {
  useLessonTab,
  useWindowDimensions,
} from '../../components/LessonTab/useLessonTab';
import { PaginationMenu } from '../../components/LessonTab/PaginationMenu';
import { getShiftedDate } from '../../utils/datetime';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { DayColumnWithSlots } from './components/DayColumnWithSlots';
import './styles.css';
import { Navigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { useTutorId } from '../../routes/params';

export const TutorBookPage: React.FC = () => {
  const { isAuthorized } = useContext(UserContext);
  const tutorId = useTutorId();

  if (!isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }

  const [columnCount, setColumnCount] = useState(5);
  const dimensions = useWindowDimensions();

  const updateColumn = () => {
    const width = dimensions.width;

    if (width < 768) setColumnCount(1);
    else if (width < 1024) setColumnCount(2);
    else if (width < 1440) setColumnCount(3);
    else if (width < 1920) setColumnCount(4);
    else if (width < 2560) setColumnCount(5);
    else setColumnCount(6);
  };

  useEffect(() => {
    updateColumn();
  }, [dimensions]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const changeDate = (isForward: boolean) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      const delta = isForward ? columnCount : -columnCount;
      newDate.setDate(prevDate.getDate() + delta);
      return newDate;
    });
  };

  const { queries } = useLessonTab(tutorId, columnCount, currentDate);
  const isLoading = queries.some((query) => query.isLoading);

  return (
    <VStack spacing="20px" w="100%">
      <PaginationMenu
        start={currentDate}
        end={getShiftedDate(currentDate, columnCount - 1)}
        onDateChange={changeDate}
      />
      {isLoading ? (
        <LoadBar description={'Загружаем слоты'} />
      ) : (
        <div
          className="tutor-book-container"
          style={{ columnRuleColor: 'blue.100' }}
        >
          {queries.map((query, i) => {
            const date = getShiftedDate(currentDate, i);
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
