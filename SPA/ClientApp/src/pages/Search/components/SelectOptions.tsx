import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useField } from 'formik';

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  options,
  label,
  name,
}) => {
  const [field] = useField({ name });

  return (
    <FormControl display={'flex'} alignItems={'center'}>
      <FormLabel
        fontSize={'xl'}
        margin={'auto 10px auto 0'}
        flex={'0 0 90px'}
        textAlign={'right'}
      >
        {label}
      </FormLabel>
      <Select
        {...field}
        bg="white"
        color="black"
        width={'100%'}
        fontSize={'lg'}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

type SelectOptionsProps = {
  options: string[];
  label: string;
  name: string;
};
