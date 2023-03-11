import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { useField } from 'formik';

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  (props) => {
    const { isOpen, onToggle } = useDisclosure();
    const onClickReveal = () => onToggle();
    const [field] = useField({ name: 'password' });

    return (
      <FormControl>
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
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

PasswordField.displayName = 'PasswordField';
