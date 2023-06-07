import { Box, Button, Flex, VStack, Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { PasswordField } from './components/PasswordField';
import { Header } from './components/Header';
import { SignupSuggestion } from './components/SignupSuggestion';
import { EmailField } from './components/EmailField';
import { Form, Formik } from 'formik';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { Navigate } from 'react-router-dom';
import { MAIN_PAGE } from '../../routes/routePaths';
import { AuthorizationContext } from './contexts/AuthorizationContext';
import { useLoginButton } from './hooks/useLoginButton';
import { useFormikValues } from './hooks/useFormikValues';
import './styles.css';
import { ButtonVariant } from '../../assets/theme/themeEnum';

export const LoginPage = () => {
  const { loginInitValues } = useFormikValues();

  const { isAuthorized } = useContext(UserContext);
  if (isAuthorized) return <Navigate to={MAIN_PAGE} />;

  const { onSubmit, providerValues } = useLoginButton();

  return (
    <Flex>
      <VStack width={'100%'} spacing={'16px'}>
        <Header title={'Войти в аккаунт'} />
        <Box
          className="login-container"
          py={{ base: '4', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          borderWidth="2px"
          borderRadius="12px"
        >
          <Formik initialValues={loginInitValues} onSubmit={onSubmit}>
            <Form>
              <Stack spacing="6">
                <Stack spacing="5">
                  <AuthorizationContext.Provider value={providerValues}>
                    <EmailField />
                    <PasswordField />
                  </AuthorizationContext.Provider>
                </Stack>
                <Stack spacing="6">
                  <Button
                    variant={ButtonVariant.green}
                    size={'lg'}
                    colorScheme={'blue'}
                    type="submit"
                  >
                    Войти
                  </Button>
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Box>
        <SignupSuggestion />
      </VStack>
    </Flex>
  );
};
