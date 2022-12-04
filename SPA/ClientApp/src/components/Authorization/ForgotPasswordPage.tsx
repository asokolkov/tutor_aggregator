import {
    ChakraProvider,
    Box,
    Button,
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
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure
} from '@chakra-ui/react'
import Theme from '../../theme/index'
import {ChangeEvent, useState} from 'react';

export const ForgotPasswordPage = () => {
    // const [value, setValue] = useState('');
    // const {isError: isVisible,} = useDisclosure({ defaultIsOpen: true })
    //
    // function isValidEmail(email: string) {
    //     return /\S+@\S+\.\S+/.test(email);
    // }
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value);
    // }
    // const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     if (!isValidEmail(value)) {
    //         isVisible;
    //     } else {
    //         setValue('Правильная почта');
    //     }
    // }

    return (
        <ChakraProvider theme={Theme}>
            <Flex background="gray.50" height={'100vh'}>
                <VStack margin={'80px'} width={'100%'}>
                    <Stack textAlign="center">
                        <Heading>
                            Восстановить пароль
                        </Heading>
                    </Stack>
                    <Box py={{base: '0', sm: '8'}} px={{base: '4', sm: '10'}} width={'40%'} bg='white' borderRadius={{base: 'none', sm: 'xl'}}>
                        <Stack spacing="6">
                            <Stack spacing="5">
                                isError ? (
                                <Alert status='error'>
                                    <AlertIcon />
                                    <AlertTitle>Введена некорректная почта!</AlertTitle>
                                    <AlertDescription>Проверьте почту.</AlertDescription>
                                </Alert>
                                <FormControl>
                                    <FormLabel htmlFor="email">Почта от аккаунта</FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        // value={value}
                                        // onChange={handleChange}
                                        placeholder="Введите почту"/>
                                </FormControl>
                            </Stack>
                            <Stack spacing="6">
                                <Button
                                    // onClick={handleSubmit}
                                    variant={'solid'}
                                    size={'lg'}
                                    colorScheme={'blue'}>
                                    Отправить письмо
                                </Button>
                            </Stack>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Восстановили пароль?</Text>
                                <Button variant="link" colorScheme="blue">
                                    <Link href='/login'>
                                        Войти
                                    </Link>
                                </Button>
                            </HStack>
                        </Stack>
                    </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
    )
}