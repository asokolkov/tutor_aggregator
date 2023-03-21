import { Button, ButtonGroup, HStack, VisuallyHidden } from '@chakra-ui/react';
import { FaGoogle, FaVk } from 'react-icons/fa';
import AccountAPI from '../../../api/account';

const providers = [
  { name: 'Google', icon: <FaGoogle /> },
  { name: 'Vk', icon: <FaVk /> },
];

export function OAuthButtons() {
  return (
    <HStack justify="center">
      <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
          <Button
            key={name}
            width="full"
            onClick={() =>
              AccountAPI.loginViaExternal(name, '/').then((r) => console.log(r))
            }
          >
            <VisuallyHidden>Sign in with {name}</VisuallyHidden>
            {icon}
          </Button>
        ))}
      </ButtonGroup>
    </HStack>
  );
}
