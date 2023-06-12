import * as React from 'react';
import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { useField } from 'formik';

export const NameSurnameField: React.FC = () => {
  const [nameField] = useField({ name: 'name' });
  const [surnameField] = useField({ name: 'surname' });
  return (
    <FormControl>
      <FormLabel htmlFor="email">Имя и фамилия</FormLabel>
      <HStack>
        <Input
          id="name"
          type="text"
          placeholder="Введите имя"
          {...nameField}
          maxLength={32}
        />
        <Input
          id="surname"
          type="text"
          placeholder="Введите фамилию"
          {...surnameField}
          maxLength={32}
        />
      </HStack>
    </FormControl>
  );
};
