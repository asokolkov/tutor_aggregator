import * as React from 'react';
import { getTutorBookByIdPath } from '../../../routes/routes';
import { Button, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TutorCardContext } from '../../../contexts/TutorCardContext';

export const BookLessonButton: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const context = useContext(TutorCardContext);
  const tutorId = context.tutor.id;

  return (
    <Link to={getTutorBookByIdPath(tutorId)}>
      <Button
        size={'md'}
        colorScheme={'green'}
        width={'100%'}
        margin={isDesktop ? '0 0 0 1em' : '8px 0 0 0'}
      >
        Записаться на занятие
      </Button>
    </Link>
  );
};
