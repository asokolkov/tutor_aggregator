import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Link,
  Stack,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { PasswordField } from './components/PasswordField';
import { OAuthButtons } from './components/OAuthButtons';
import { Header } from './components/Header';
import { DividerWithOr } from './components/DividerWithOr';
import { EmailField } from './components/EmailField';
import { TutorOrStudentSwitchField } from './components/TutorOrStudentSwitchField';
import { PhoneNumberField } from './components/PhoneNumberField';
import { NameSurnameField } from './components/NameSurnameField';
import { Form, Formik } from 'formik';
import { LoginSuggestion } from './components/LoginSuggestion';
import AccountAPI, { V1RegisterDto } from '../../api/account';
import UserAPI, { AccountType } from '../../api/currentUser';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { SEARCH_PAGE } from '../../routes/routePaths';
import { AuthorizationContext } from '../../contexts/AuthorizationContext';
import { AxiosError } from 'axios';
import { useAuthContextValue } from './useAuthContextValue';

type FormikValuesProps = {
  name: string;
  surname: string;
  phoneNumber: string;
  isTutor: boolean;
  email: string;
  password: string;
};

const initialValues: FormikValuesProps = {
  name: '',
  surname: '',
  phoneNumber: '',
  isTutor: false,
  email: '',
  password: '',
};

export const SignupPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const authContextValue = useAuthContextValue();

  const onSubmit = async (values: FormikValuesProps) => {
    const registerData: V1RegisterDto = {
      accountType: values.isTutor ? AccountType.Tutor : AccountType.Student,
      email: values.email,
      firstName: values.name,
      lastName: values.surname,
      password: values.password,
      phone: values.phoneNumber,
    };

    AccountAPI.register(registerData)
      .then(async () => {
        const user = await UserAPI.getCurrentUser();
        userContext.setUser(user);
        navigate(SEARCH_PAGE);
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 400) {
          authContextValue.setError(err.response.data.toString());
        }
      });
  };

  return (
    <Flex background={'white'}>
      <VStack margin={'20px'} width={'100%'}>
        <Header title={'Зарегистрировать аккаунт'} />
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          width={isDesktop ? '50%' : '90%'}
          bg="white"
          borderWidth="2px"
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <OAuthButtons />
          <DividerWithOr />
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <NameSurnameField />
              <PhoneNumberField />
              <TutorOrStudentSwitchField />
              <Stack spacing="6">
                <Stack spacing="5">
                  <AuthorizationContext.Provider value={authContextValue}>
                    <EmailField />
                    <PasswordField />
                  </AuthorizationContext.Provider>
                </Stack>
                <HStack justify="space-between">
                  <Checkbox>
                    Принимаю{' '}
                    <Link color="teal.500" href="#">
                      условия сервиса.
                    </Link>
                  </Checkbox>
                </HStack>
                <Stack spacing="6">
                  <Button
                    variant={'solid'}
                    size={'lg'}
                    colorScheme={'blue'}
                    type="submit"
                  >
                    Зарегистрироваться
                  </Button>
                </Stack>
                <LoginSuggestion />
              </Stack>
            </Form>
          </Formik>
        </Box>
      </VStack>
    </Flex>
  );
};
