import React from 'react';
import { LessonType } from '../api/lessons';

export type SlotContextProps = {
  type: LessonType;
  startDate: string;
  endDate: string;
  price: number;
  studentName?: string;
  isBooked: boolean;
  onDeleteModalOpen: () => void;
};

export const SlotContext = React.createContext<SlotContextProps>(null);
