import {
  ChakraProvider,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Heading,
  VStack,
  HStack,
  Input,
  Stack,
  Text,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import Theme from '../../theme/index';
import { PasswordField } from './PasswordField';
import { OAuthButtons } from './OAuthButtons';
import { Link as RLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../route-paths';

export const SignupPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <ChakraProvider theme={Theme}>
      <Flex background={'white'} height={'60vh'}>
        <VStack margin={'20px'} width={'100%'}>
          <Stack textAlign="center">
            <Heading>Зарегистрировать аккаунт</Heading>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            width={isDesktop ? '50%' : '90%'}
            bg="white"
            borderWidth="2px"
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <HStack justify="center">
              <OAuthButtons></OAuthButtons>
            </HStack>
            <HStack margin={'10px'}>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                или
              </Text>
              <Divider />
            </HStack>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Почта</FormLabel>
                  <Input id="email" type="email" placeholder="Введите почту" />
                </FormControl>
                <PasswordField />
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
                <Button variant={'solid'} size={'lg'} colorScheme={'blue'}>
                  Зарегистрироваться
                </Button>
              </Stack>
              <HStack spacing="1" justify="center">
                <Text color="muted">Уже есть аккаунт?</Text>
                <Button variant="link" colorScheme="blue">
                  <Link>
                    <RLink to={LOGIN_PAGE}>Войти</RLink>
                  </Link>
                </Button>
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};
