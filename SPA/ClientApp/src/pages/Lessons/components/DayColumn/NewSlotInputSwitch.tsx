import * as React from 'react';
import { NewSlotInputProps } from './_shared';
import { FormLabel, Switch, VStack } from '@chakra-ui/react';
import { useField } from 'formik';

export const NewSlotInputSwitch: React.FC<NewSlotInputProps> = ({
  name,
  label,
}) => {
  const [field] = useField({ name });
  return (
    <VStack>
      <FormLabel>{label}</FormLabel>
      <Switch {...field} />
    </VStack>
  );
};
