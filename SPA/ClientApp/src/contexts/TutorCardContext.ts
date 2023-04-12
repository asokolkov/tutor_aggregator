import { ReviewList, Tutor } from '../api/tutors';
import React from 'react';

type ContextProps = {
  tutor: Tutor;
  reviews: ReviewList;
};

export const TutorCardContext = React.createContext<ContextProps>(null);
