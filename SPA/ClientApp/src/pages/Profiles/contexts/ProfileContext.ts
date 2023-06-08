import React from 'react';
import {
  V1LocationDto,
  V1StudentDto,
  V1SubjectDto,
  V1TutorDto,
} from '../../../api/models';

type ContextProps = {
  tutor: V1TutorDto;
  student: V1StudentDto;
  subjects: V1SubjectDto[];
  locations: V1LocationDto[];
  isLoading: boolean;
};

export const ProfileContext = React.createContext<ContextProps>(null);
