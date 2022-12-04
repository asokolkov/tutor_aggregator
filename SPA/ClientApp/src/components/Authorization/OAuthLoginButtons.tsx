import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { FaGoogle, FaVk } from 'react-icons/fa'

const providers = [
    { name: 'Google', icon: <FaGoogle /> },
    { name: 'VK', icon: <FaVk /> },
]

export const OAuthLoginButtons = () => (
    <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
            <Button key={name} width="full">
                <VisuallyHidden>Войти через {name}</VisuallyHidden>
                {icon}
            </Button>
        ))}
    </ButtonGroup>
)