import React from 'react';
import { LessonType } from '../api/lessons';

export type SlotContextProps = {
  type: LessonType;
  startDate: string;
  endDate: string;
  price: number;
  studentName?: string;
  isBooked: boolean;
};

export const SlotContext = React.createContext<SlotContextProps>(null);
