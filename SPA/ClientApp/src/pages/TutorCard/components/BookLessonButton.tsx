import * as React from 'react';
import { getTutorBookByIdPath } from '../../../routes/routes';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardInfoContext } from '../../../contexts/CardInfoContext';

export const BookLessonButton: React.FC = () => {
  const context = useContext(CardInfoContext);

  return (
    <Link to={getTutorBookByIdPath(context.id)} style={{ width: '100%' }}>
      <Button variant="green" w="100%">
        Записаться на занятие
      </Button>
    </Link>
  );
};
