import * as React from 'react';
import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { NewSlotInputProps } from './_shared';
import { useField } from 'formik';

export const NewSlotInputTime: React.FC<NewSlotInputProps> = ({
  label,
  placeholder,
  name,
}) => {
  const [field] = useField({ name });

  return (
    <VStack>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={placeholder} type={'time'} {...field} required />
    </VStack>
  );
};
