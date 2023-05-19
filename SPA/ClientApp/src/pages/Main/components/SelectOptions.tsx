import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useField } from 'formik';

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  options,
  optionsMap,
  label,
  name,
  placeholder,
}) => {
  const [field] = useField({ name });

  return (
    <FormControl display={'flex'} flexDirection={'column'}>
      <FormLabel variant={'misc.field-title'} margin={'0 0 2px 0'}>
        {label}
      </FormLabel>
      <Select
        {...field}
        bg="white"
        color="black"
        width={'100%'}
        fontSize={'lg'}
        placeholder={placeholder}
      >
        {options?.map((option) => (
          <option value={optionsMap ? optionsMap[option] : option} key={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

type SelectOptionsProps = {
  options: string[];
  optionsMap?: { [index: string]: number };
  label: string;
  name: string;
  placeholder?: string;
};
