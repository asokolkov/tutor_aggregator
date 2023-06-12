import { DisclosureProps } from '../../disclosureProps';
import React from 'react';

export type ModalContextProps = {
  disclosure?: DisclosureProps;
  tutorId: string;
  setTutorId: (tutorId: string) => void;
};

export const ReviewModalContext =
  React.createContext<ModalContextProps>(undefined);
