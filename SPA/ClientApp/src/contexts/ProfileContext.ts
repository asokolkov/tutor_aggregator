import { Student } from '../apis/students';
import { Tutor } from '../apis/tutors';
import React from 'react';

type ContextType = {
  tutorProfile: Tutor;
  studentProfile: Student;
  isLoading: boolean;
};

export const ProfileContext = React.createContext<ContextType>(null);
