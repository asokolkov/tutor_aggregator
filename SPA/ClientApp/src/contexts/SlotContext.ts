import React from 'react';
import { LessonType } from '../api/lessons';

type ContextProps = {
  type: LessonType;
  startDate: string;
  endDate: string;
  price: number;
  studentName?: string;
  isBooked: boolean;
  onDeleteModalOpen: () => void;
};

export const SlotContext = React.createContext<ContextProps>(null);
