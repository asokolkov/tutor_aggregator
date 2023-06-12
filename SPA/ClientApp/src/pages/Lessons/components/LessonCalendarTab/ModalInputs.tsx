import * as React from 'react';
import { useField } from 'formik';
import { Box, FormLabel, Input, Switch, VStack } from '@chakra-ui/react';

export const InputNumber: React.FC<InputProps> = ({
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
        type="number"
        min="1"
        {...field}
      />
    </VStack>
  );
};

export const InputSwitch: React.FC<InputProps> = ({ name, label }) => {
  const [field] = useField({ name });
  return (
    <VStack>
      <FormLabel>{label}</FormLabel>
      <Box h="40px">
        <Switch {...field} />
      </Box>
    </VStack>
  );
};
export const InputTime: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
}) => {
  const [field] = useField({ name });

  return (
    <VStack>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={placeholder} type="time" {...field} required />
    </VStack>
  );
};

type InputProps = {
  label: string;
  placeholder?: string;
  name: string;
};
