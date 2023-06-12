import { V1AccountTypeDto, V1RegisterDto } from '../../../api/models';
import UserAPI from '../../../api/user';
import { SEARCH_PAGE } from '../../../routes/routePaths';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { useAuthContext } from './useAuthContext';
import { SignupFormikProps } from './useFormikValues';

export function useRegisterButton() {
  const { providerValues } = useAuthContext();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onSubmit = (values: SignupFormikProps) => {
    const registerData: V1RegisterDto = {
      accountType: values.isTutor
        ? V1AccountTypeDto.tutor
        : V1AccountTypeDto.student,
      email: values.email,
      firstName: values.name,
      lastName: values.surname,
      password: values.password,
      phone: '+7' + values.phoneNumber,
    };

    UserAPI.register(registerData)
      .then((user) => {
        setUser(user);
        navigate(SEARCH_PAGE);
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 400) {
          providerValues.setError(err.response.data.toString());
        }
      });
  };
  return { onSubmit, providerValues };
}
