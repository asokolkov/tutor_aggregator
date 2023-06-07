import * as React from 'react';
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { useField } from 'formik';

export const PhoneNumberField: React.FC = () => {
  const [field] = useField({ name: 'phoneNumber' });
  return (
    <FormControl>
      <FormLabel htmlFor="email">Телефон</FormLabel>
      <HStack>
        <InputGroup>
          <InputLeftAddon children="+7" />
          <Input
            type="tel"
            placeholder="9991234567"
            pattern="9[0-9]{9}"
            minLength={10}
            maxLength={10}
            required
            {...field}
          />
        </InputGroup>
      </HStack>
    </FormControl>
  );
};
