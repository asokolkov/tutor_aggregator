import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { PasswordField } from './components/PasswordField';
import { OAuthButtons } from './components/OAuthButtons';
import { Header } from './components/Header';
import { SignupSuggestion } from './components/SignupSuggestion';
import { ForgetPasswordButton } from './components/ForgetPasswordButton';
import { DividerWithOr } from './components/DividerWithOr';

export const LoginPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

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
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Почта</FormLabel>
                <Input id="email" type="email" placeholder="Введите почту" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Запомнить данные</Checkbox>
              <ForgetPasswordButton />
            </HStack>
            <Stack spacing="6">
              <Button variant={'solid'} size={'lg'} colorScheme={'blue'}>
                Войти
              </Button>
            </Stack>
            <SignupSuggestion />
          </Stack>
        </Box>
      </VStack>
    </Flex>
  );
};
