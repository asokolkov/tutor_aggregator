import * as React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

export const EmailField: React.FC = () => {
  const [field] = useField({ name: 'email' });
  return (
    <FormControl>
      <FormLabel htmlFor="email">Почта</FormLabel>
      <Input id="email" type="email" {...field} placeholder="Введите почту" />
    </FormControl>
  );
};
