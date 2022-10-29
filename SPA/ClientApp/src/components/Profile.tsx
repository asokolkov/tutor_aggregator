import {Button, ChakraProvider} from '@chakra-ui/react'

export const Profile = () => {
    return (
        <ChakraProvider>
            <Button colorScheme='teal' size='lg'>
                Button
            </Button>
        </ChakraProvider>
    )
}