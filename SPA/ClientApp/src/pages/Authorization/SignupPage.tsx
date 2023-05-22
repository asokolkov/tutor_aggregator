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
import { Header } from './components/Header';
import { EmailField } from './components/EmailField';
import { TutorOrStudentSwitchField } from './components/TutorOrStudentSwitchField';
import { PhoneNumberField } from './components/PhoneNumberField';
import { NameSurnameField } from './components/NameSurnameField';
import { Form, Formik } from 'formik';
import { LoginSuggestion } from './components/LoginSuggestion';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { SEARCH_PAGE } from '../../routes/routePaths';
import { AuthorizationContext } from './contexts/AuthorizationContext';
import { useRegisterButton } from './hooks/useRegisterButton';
import { useFormikValues } from './hooks/useFormikValues';

export const SignupPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { signupInitValues } = useFormikValues();

  const { isAuthorized } = useContext(UserContext);
  if (isAuthorized) return <Navigate to={SEARCH_PAGE} />;

  const { onSubmit, providerValues } = useRegisterButton();

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
          <Formik initialValues={signupInitValues} onSubmit={onSubmit}>
            <Form>
              <NameSurnameField />
              <PhoneNumberField />
              <TutorOrStudentSwitchField />
              <Stack spacing="6">
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
