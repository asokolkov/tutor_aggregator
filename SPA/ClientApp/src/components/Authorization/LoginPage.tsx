import {
    ChakraProvider,
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Divider,
    Link,
    Heading,
    VStack,
    HStack,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import Theme from '../../theme/index';
import {PasswordField} from './PasswordField';
import {OAuthButtons} from './OAuthButtons';
import {useRef, MouseEvent} from "react";
import {login} from '../../api/authentication';

export const LoginPage = () => {

    const passwordRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const rememberMeRef = useRef<HTMLInputElement>();

    const handleSubmit = (event : MouseEvent) => {
        event.preventDefault();
        const password = passwordRef.current?.value;
        const email = emailRef.current?.value;
        const rememberMe = rememberMeRef.current?.checked;

        login({email: email, rememberMe: rememberMe, password: password})
            .then((result) => console.log(result));
    }

    return (
        <ChakraProvider theme={Theme}>
            <Flex background={'gray.50'} height={'100vh'}>
                <VStack margin={'80px'} width={'100%'}>
                    <Stack textAlign="center">
                        <Heading>Войти в аккаунт</Heading>
                    </Stack>
                    <Box
                        py={{base: '0', sm: '8'}}
                        px={{base: '4', sm: '10'}}
                        width={'40%'}
                        bg="white"
                        borderRadius={{base: 'none', sm: 'xl'}}
                    >
                        <HStack justify="center">
                            <OAuthButtons></OAuthButtons>
                        </HStack>
                        <HStack margin={'10px'}>
                            <Divider/>
                            <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                или
                            </Text>
                            <Divider/>
                        </HStack>
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Почта</FormLabel>
                                    <Input ref={emailRef} id="email" type="email" placeholder="Введите почту"/>
                                </FormControl>
                                <PasswordField ref={passwordRef}/>
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox ref={rememberMeRef} defaultChecked>Запомнить данные</Checkbox>
                                <Button variant="link" colorScheme="blue" size="sm">
                                    Забыли пароль?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button variant={'solid'} size={'lg'} colorScheme={'blue'} onClick={handleSubmit}>
                                    Войти
                                </Button>
                            </Stack>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Нет аккаунта?</Text>
                                <Button variant="link" colorScheme="blue">
                                    <Link href="/signup">Зарегистрироваться</Link>
                                </Button>
                            </HStack>
                        </Stack>
                    </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
    );
};
