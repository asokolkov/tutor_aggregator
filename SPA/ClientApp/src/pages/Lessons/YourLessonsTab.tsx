import * as React from 'react';
import { useLessonsQuery } from '../../query/useLessonsQuery';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { DayColumnWithSlots } from './components/DayColumn/DayColumnWithSlots';
import { LoadBar } from '../sharedComponents/LoadBar';

export const YourLessonsTab: React.FC = () => {
  const { user } = useContext(UserContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userId = user.id;
  const { data, isLoading } = useLessonsQuery(
    'd08d5aa7-2313-4fb0-839a-8d6a8431969e'
  );
  if (isLoading)
    return <LoadBar description={'Загружаем данные ваших уроков'} />;
  return <DayColumnWithSlots lessons={data} date={new Date()} />;
};
