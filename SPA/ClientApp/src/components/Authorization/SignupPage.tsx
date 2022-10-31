import { ChakraProvider, Box, Button, Checkbox, Flex, FormControl, FormLabel, Link, Heading, VStack, HStack, Input, Stack, Text, Divider } from '@chakra-ui/react'
import Theme from '../../theme/index'
import { PasswordField } from './PasswordField'
import { OAuthButtons } from "./OAuthButtons";

export const SignupPage = () => {
    return (
        <ChakraProvider theme={Theme}>
            <Flex background="gray.50" height={'100vh'}>
                <VStack margin={'80px'} width={'100%'}>
                    <Stack textAlign="center">
                        <Heading>
                            Зарегистрировать аккаунт
                        </Heading>
                    </Stack>
                    <Box py={{base: '0', sm: '8'}} px={{base: '4', sm: '10'}} width={'40%'} bg='white' borderRadius={{base: 'none', sm: 'xl'}}>
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
                                    <Input id="email" type="email" placeholder="Введите почту"/>
                                </FormControl>
                                <PasswordField/>
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox>Принимаю <Link color='teal.500' href='#'>условия сервиса.
                                    </Link>
                                </Checkbox>
                            </HStack>
                            <Stack spacing="6">
                                <Button variant={'solid'} size={'lg'} colorScheme={'blue'}>Зарегистрироваться</Button>
                            </Stack>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Уже есть аккаунт?</Text>
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