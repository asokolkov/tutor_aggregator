import * as React from 'react';
import { LOGIN_PAGE, SIGNUP_PAGE } from '../../../routes/routePaths';
import { Button } from '@chakra-ui/react';
import { ButtonVariant } from '../../../assets/theme/themeEnum';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant={ButtonVariant.blue100}
      onClick={() => navigate(LOGIN_PAGE)}
    >
      Войти
    </Button>
  );
};

export const RegisterButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant={ButtonVariant.green}
      rightIcon={<ChevronRightIcon />}
      onClick={() => navigate(SIGNUP_PAGE)}
    >
      Зарегистрироваться
    </Button>
  );
};
