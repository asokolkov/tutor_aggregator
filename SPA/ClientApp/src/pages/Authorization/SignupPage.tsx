import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Link,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { PasswordField } from './components/PasswordField';
import { Header } from './components/Header';
import { EmailField } from './components/EmailField';
import { TutorOrStudentSwitchField } from './components/TutorOrStudentSwitchField';
import { PhoneNumberField } from './components/PhoneNumberField';
import { NameSurnameField } from './components/NameSurnameField';
import { Form, Formik } from 'formik';
import { LoginSuggestion } from './components/LoginSuggestion';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { MAIN_PAGE } from '../../routes/routePaths';
import { AuthorizationContext } from './contexts/AuthorizationContext';
import { useRegisterButton } from './hooks/useRegisterButton';
import { useFormikValues } from './hooks/useFormikValues';
import './styles.css';
import { ButtonVariant } from '../../assets/theme/themeEnum';

export const SignupPage = () => {
  const { signupInitValues } = useFormikValues();

  const { isAuthorized } = useContext(UserContext);
  if (isAuthorized) return <Navigate to={MAIN_PAGE} />;

  const { onSubmit, providerValues } = useRegisterButton();

  return (
    <Flex>
      <VStack width={'100%'} spacing={'16px'}>
        <Header title={'Зарегистрировать аккаунт'} />
        <Box
          className="login-container"
          py={{ base: '4', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          borderWidth="2px"
          borderRadius="12px"
        >
          <Formik initialValues={signupInitValues} onSubmit={onSubmit}>
            <Form>
              <Stack spacing="6">
                <TutorOrStudentSwitchField />
                <NameSurnameField />
                <PhoneNumberField />
                <Stack spacing="5">
                  <AuthorizationContext.Provider value={providerValues}>
                    <EmailField />
                    <PasswordField />
                  </AuthorizationContext.Provider>
                </Stack>
                <HStack justify="space-between">
                  <Checkbox>
                    Принимаю{' '}
                    <Link color="teal.500" href="#">
                      условия сервиса
                    </Link>
                  </Checkbox>
                </HStack>
                <Stack spacing="6">
                  <Button
                    variant={ButtonVariant.green}
                    size={'lg'}
                    colorScheme={'blue'}
                    type="submit"
                  >
                    Зарегистрироваться
                  </Button>
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Box>
        <LoginSuggestion />
      </VStack>
    </Flex>
  );
};
