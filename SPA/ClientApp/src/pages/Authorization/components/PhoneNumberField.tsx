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
          <Input id="tel" type="tel" placeholder="9991234567" {...field} />
        </InputGroup>
      </HStack>
    </FormControl>
  );
};
