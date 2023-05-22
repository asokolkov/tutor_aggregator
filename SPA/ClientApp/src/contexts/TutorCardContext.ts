import React from 'react';
import { V1ReviewDtoV1PageDto, V1TutorDto } from '../api/models';

type ContextProps = {
  tutor: V1TutorDto;
  reviews: V1ReviewDtoV1PageDto;
};

export const TutorCardContext = React.createContext<ContextProps>(null);
