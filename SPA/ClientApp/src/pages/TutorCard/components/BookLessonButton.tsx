import * as React from 'react';
import { getTutorBookByIdPath } from '../../../routes/routes';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardInfoContext } from '../contexts/CardInfoContext';
import { ButtonVariant } from '../../../assets/theme/themeEnum';

export const BookLessonButton: React.FC = () => {
  const context = useContext(CardInfoContext);
  const navigate = useNavigate();

  return (
    <Button
      variant={ButtonVariant.green}
      w="100%"
      onClick={() => navigate(getTutorBookByIdPath(context.id))}
      flex="1 0 208px"
    >
      Записаться на занятие
    </Button>
  );
};
