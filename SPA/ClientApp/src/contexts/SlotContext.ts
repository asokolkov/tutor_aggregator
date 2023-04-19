import React from 'react';
import { Lesson } from '../api/lessons';

type ContextProps = {
  lesson: Lesson;
  isForTutor: boolean;
  isBooked: boolean;
  tutorName: string;
  studentName: string;
  dateRangeStr: string;
};

export const SlotContext = React.createContext<ContextProps>(null);
