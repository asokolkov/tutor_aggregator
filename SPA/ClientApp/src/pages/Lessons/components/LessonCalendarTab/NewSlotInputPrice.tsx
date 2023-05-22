import * as React from 'react';
import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { NewSlotInputProps } from './_shared';
import { useField } from 'formik';

export const NewSlotInputPrice: React.FC<NewSlotInputProps> = ({
  label,
  placeholder,
  name,
}) => {
  const [field] = useField({ name });

  return (
    <VStack>
      <FormLabel>{label}</FormLabel>
      <Input
        required
        placeholder={placeholder}
        type={'number'}
        min="0"
        step="100"
        {...field}
      />
    </VStack>
  );
};
