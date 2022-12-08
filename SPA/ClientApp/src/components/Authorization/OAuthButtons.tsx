import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { FaGoogle, FaVk } from 'react-icons/fa';

const providers = [
  { name: 'Google', icon: <FaGoogle /> },
  { name: 'VK', icon: <FaVk /> },
];

export const OAuthButtons = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
