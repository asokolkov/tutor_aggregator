import { Student } from '../api/students';
import { Tutor } from '../api/tutors';
import React from 'react';

type ContextProps = {
  tutorProfile: Tutor;
  studentProfile: Student;
  isLoading: boolean;
};

export const ProfileContext = React.createContext<ContextProps>(null);
