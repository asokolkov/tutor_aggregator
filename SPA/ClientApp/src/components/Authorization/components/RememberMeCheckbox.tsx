import * as React from 'react';
import { useField } from 'formik';
import { Checkbox } from '@chakra-ui/react';

export const RememberMeCheckbox: React.FC = () => {
  const [field] = useField({ name: 'remember' });
  return <Checkbox {...field}>Запомнить</Checkbox>;
};
