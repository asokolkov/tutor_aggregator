import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { FaGoogle, FaVk } from 'react-icons/fa';
import AuthAPI from '../../../apis/auth';

const providers = [
  { name: 'Google', icon: <FaGoogle /> },
  { name: 'Vk', icon: <FaVk /> },
];

export function OAuthButtons() {
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, icon }) => (
        <Button
          key={name}
          width="full"
          onClick={() =>
            AuthAPI.loginViaExternal(name, '/').then((r) => console.log(r))
          }
        >
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
}
