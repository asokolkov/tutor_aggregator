import { useLessonsByDateQuery } from '../../query/useLessonsByDateQuery';
import { useEffect, useState } from 'react';

function datesForQuery(date: Date, count: number): Date[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + i);
    result.push(newDate);
  }
  return result;
}

export function useLessonTab(
  tutorId: string,
  columnCount: number,
  currentDate: Date
) {
  const dates = datesForQuery(currentDate, columnCount);
  const queries = useLessonsByDateQuery(tutorId, dates);
  return { queries };
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
