import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { useField } from 'formik';
import { useContext } from 'react';
import { AuthorizationContext } from '../../../contexts/AuthorizationContext';

export const PasswordField: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const onClickReveal = () => onToggle();
  const [field] = useField({ name: 'password' });

  const authContext = useContext(AuthorizationContext);

  return (
    <FormControl isInvalid={authContext.hasError}>
      <FormLabel htmlFor="password">Пароль</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? 'Скрыть пароль' : 'Показать пароль'}
            icon={isOpen ? <GoEyeClosed /> : <GoEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          placeholder="Введите пароль"
          {...field}
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
        />
      </InputGroup>
      <FormErrorMessage>{authContext.errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

PasswordField.displayName = 'PasswordField';
