import * as React from 'react';
import { getTutorBookByIdPath } from '../../../routes/routes';
import { Button } from '@chakra-ui/react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardInfoContext } from '../contexts/CardInfoContext';
import { ButtonVariant } from '../../../assets/theme/themeEnum';

export const BookLessonButton: React.FC = () => {
  const { id, fullName } = useContext(CardInfoContext);
  const navigate = useNavigate();

  const onClick = () => {
    navigate({
      pathname: getTutorBookByIdPath(id),
      search: createSearchParams({
        name: fullName,
      }).toString(),
    });
  };

  return (
    <Button
      variant={ButtonVariant.green}
      w="100%"
      onClick={onClick}
      flex="1 0 208px"
    >
      Записаться на занятие
    </Button>
  );
};
