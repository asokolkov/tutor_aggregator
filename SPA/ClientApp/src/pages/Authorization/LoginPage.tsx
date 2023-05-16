import {
  Box,
  Button,
  Flex,
  VStack,
  HStack,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { PasswordField } from './components/PasswordField';
import { Header } from './components/Header';
import { SignupSuggestion } from './components/SignupSuggestion';
import { ForgetPasswordButton } from './components/ForgetPasswordButton';
import { EmailField } from './components/EmailField';
import { Form, Formik } from 'formik';
import { RememberMeCheckbox } from './components/RememberMeCheckbox';
import UserAPI, { V1LoginDto } from '../../api/user';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PAGE } from '../../routes/routePaths';
import { AuthorizationContext } from '../../contexts/AuthorizationContext';
import { AxiosError } from 'axios';
import { useAuthContextValue } from './useAuthContextValue';

type FormikValuesProps = {
  email: string;
  password: string;
  remember: boolean;
};
const initialValues: FormikValuesProps = {
  email: '',
  password: '',
  remember: true,
};

const LOGIN_FAIL_ERROR_MESSAGE = 'Проверьте правильность логина и пароля';

export const LoginPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const authContextValue = useAuthContextValue();

  const onFormSubmit = async (values: FormikValuesProps) => {
    const loginData: V1LoginDto = {
      rememberMe: values.remember,
      email: values.email,
      password: values.password,
    };

    UserAPI.login(loginData)
      .then((user) => {
        userContext.setUser(user);
        navigate(SEARCH_PAGE);
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 401) {
          authContextValue.setError(LOGIN_FAIL_ERROR_MESSAGE);
        }
      });
  };

  return (
    <Flex background={'white'}>
      <VStack margin={'20px'} width={'100%'}>
        <Header title={'Войти в аккаунт'} />
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          width={isDesktop ? '50%' : '90%'}
          bg="white"
          borderWidth="2px"
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
            <Form>
              <Stack spacing="6">
                <Stack spacing="5">
                  <AuthorizationContext.Provider value={authContextValue}>
                    <EmailField />
                    <PasswordField />
                  </AuthorizationContext.Provider>
                </Stack>
                <HStack justify={'space-between'}>
                  <RememberMeCheckbox />
                  <ForgetPasswordButton />
                </HStack>
                <Stack spacing="6">
                  <Button
                    variant={'solid'}
                    size={'lg'}
                    colorScheme={'blue'}
                    type="submit"
                  >
                    Войти
                  </Button>
                </Stack>
                <SignupSuggestion />
              </Stack>
            </Form>
          </Formik>
        </Box>
      </VStack>
    </Flex>
  );
};
