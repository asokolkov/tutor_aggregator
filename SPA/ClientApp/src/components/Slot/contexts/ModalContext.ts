import React from 'react';
import { DisclosureProps } from '../../disclosureProps';
import { BookedBy } from '../Slot';

export type ModalContextProps = {
  deleteDisc: DisclosureProps;
  cancelDisc: DisclosureProps;
  bookDisc: DisclosureProps;
  data: ModalData;
  setData: (data: ModalData) => void;
};

export type ModalData = {
  lessonId: string;
  timeRange: string;
  tutorName: string;
  studentName: string;
  bookedBy: BookedBy;
};

export const ModalContext = React.createContext<ModalContextProps>(null);
