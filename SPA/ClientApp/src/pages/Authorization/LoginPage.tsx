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
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { Navigate } from 'react-router-dom';
import { SEARCH_PAGE } from '../../routes/routePaths';
import { AuthorizationContext } from './contexts/AuthorizationContext';
import { useLoginButton } from './hooks/useLoginButton';
import { useFormikValues } from './hooks/useFormikValues';

export const LoginPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { loginInitValues } = useFormikValues();

  const { isAuthorized } = useContext(UserContext);
  if (isAuthorized) return <Navigate to={SEARCH_PAGE} />;

  const { onSubmit, providerValues } = useLoginButton();

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
          <Formik initialValues={loginInitValues} onSubmit={onSubmit}>
            <Form>
              <Stack spacing="6">
                <Stack spacing="5">
                  <AuthorizationContext.Provider value={providerValues}>
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
