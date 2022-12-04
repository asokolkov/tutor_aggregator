import { Button, ButtonGroup, VisuallyHidden, Link } from '@chakra-ui/react'
import { FaGoogle, FaVk } from 'react-icons/fa'

const providers = [
    { name: 'Google', icon: <FaGoogle /> },
    { name: 'VK', icon: <FaVk /> },
]

const continueSignup = () => {
    }

export const OAuthSignupButtons = () => (
    <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
                <Button key={name} width="full" onClick={continueSignup}>
                    <Link href='/signup_oauth'>
                    <VisuallyHidden>Войти через {name}</VisuallyHidden>
                    {icon}
                    </Link>
                </Button>
        ))}
    </ButtonGroup>
)