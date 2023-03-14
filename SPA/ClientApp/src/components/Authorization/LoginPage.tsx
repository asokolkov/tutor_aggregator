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
import { OAuthButtons } from './components/OAuthButtons';
import { Header } from './components/Header';
import { SignupSuggestion } from './components/SignupSuggestion';
import { ForgetPasswordButton } from './components/ForgetPasswordButton';
import { DividerWithOr } from './components/DividerWithOr';
import { EmailField } from './components/EmailField';
import { Form, Formik } from 'formik';
import { RememberMeCheckbox } from './components/RememberMeCheckbox';
import AccountAPI, { V1LoginDto } from '../../apis/account';
import { UserContext } from '../../contexts/UserContext';
import UserAPI from '../../apis/currentUser';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PAGE } from '../../route-paths';

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

export const LoginPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const onFormSubmit = async (values: FormikValuesProps) => {
    const loginData: V1LoginDto = {
      rememberMe: values.remember,
      email: values.email,
      password: values.password,
    };

    await AccountAPI.login(loginData);
    const user = await UserAPI.getCurrentUser();
    userContext.setUser(user);
    navigate(SEARCH_PAGE);
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
          <OAuthButtons />
          <DividerWithOr />
          <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
            <Form>
              <Stack spacing="6">
                <Stack spacing="5">
                  <EmailField />
                  <PasswordField />
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
