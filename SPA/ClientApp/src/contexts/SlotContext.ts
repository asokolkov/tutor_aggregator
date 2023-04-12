import React from 'react';
import { LessonType } from '../api/lessons';

type ContextProps = {
  id: string;
  type: LessonType;
  startDate: string;
  endDate: string;
  price: number;
  studentName?: string;
  tutorName: string;
  isBooked: boolean;
  isForTutor: boolean;
};

export const SlotContext = React.createContext<ContextProps>(null);
