import { ChakraProvider, Box, Button, Checkbox, Flex, FormControl, FormLabel, Divider, Link, Heading, VStack, HStack, Input, Stack, Text} from '@chakra-ui/react'
import Theme from '../../theme/index'
import { PasswordField } from './PasswordField'
import { OAuthLoginButtons } from "./OAuthLoginButtons";

export const LoginPage = () => {
    return (
        <ChakraProvider theme={Theme}>
            <Flex background="gray.50" height={'100vh'}>
                <VStack margin={'80px'} width={'100%'}>
                    <Stack textAlign="center">
                        <Heading>
                            Войти в аккаунт
                        </Heading>
                    </Stack>
                    <Box py={{base: '0', sm: '8'}} px={{base: '4', sm: '10'}} width={'40%'} bg='white' borderRadius={{base: 'none', sm: 'xl'}}>
                        <HStack justify="center">
                            <OAuthLoginButtons></OAuthLoginButtons>
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
                                    <Input id="email" type="email" placeholder="Введите почту"/>
                                </FormControl>
                                <PasswordField/>
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox defaultChecked>Запомнить данные</Checkbox>
                                <Button variant="link" colorScheme="blue" size="sm">
                                    <Link href='/forgot'>
                                        Забыли пароль?
                                    </Link>
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button variant={'solid'} size={'lg'} colorScheme={'blue'}>Войти</Button>
                            </Stack>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Нет аккаунта?</Text>
                                <Button variant="link" colorScheme="blue">
                                    <Link href='/signup'>
                                        Зарегистрироваться
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