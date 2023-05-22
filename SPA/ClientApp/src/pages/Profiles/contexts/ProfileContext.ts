import React from 'react';
import { V1StudentDto, V1TutorDto } from '../../../api/models';

type ContextProps = {
  tutorProfile: V1TutorDto;
  studentProfile: V1StudentDto;
  isLoading: boolean;
};

export const ProfileContext = React.createContext<ContextProps>(null);
