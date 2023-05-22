import { V1LoginDto } from '../../../api/models';
import UserAPI from '../../../api/user';
import { SEARCH_PAGE } from '../../../routes/routePaths';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { useAuthContext } from './useAuthContext';
import { LoginFormikProps } from '../LoginPage';

const LOGIN_FAIL_ERROR_MESSAGE = 'Проверьте правильность логина и пароля';

export function useLoginButton() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { providerValues } = useAuthContext();

  const onSubmit = (values: LoginFormikProps) => {
    const loginData: V1LoginDto = {
      rememberMe: values.remember,
      email: values.email,
      password: values.password,
    };

    UserAPI.login(loginData)
      .then((user) => {
        setUser(user);
        navigate(SEARCH_PAGE);
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 401) {
          providerValues.setError(LOGIN_FAIL_ERROR_MESSAGE);
        }
      });
  };

  return { onSubmit, providerValues };
}
