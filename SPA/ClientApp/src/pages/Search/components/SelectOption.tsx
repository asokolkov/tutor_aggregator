import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useField } from 'formik';

export const SelectOption: React.FC<SelectOptionsProps> = ({
  options,
  optionsMap,
  label,
  name,
  placeholder,
  isDesktop,
}) => {
  const [field] = useField({ name });

  return (
    <FormControl
      display={'flex'}
      flexDirection={isDesktop ? 'column' : 'row'}
      alignItems={isDesktop ? 'flex-start' : 'center'}
    >
      <FormLabel
        fontSize={'md'}
        margin={isDesktop ? '0 0 2px 0' : '0 2px 0 0'}
        width={isDesktop ? 'auto' : '150px'}
      >
        {label}
      </FormLabel>
      <Select
        {...field}
        bg="white"
        color="black"
        width={'100%'}
        size={'sm'}
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
  optionsMap?: { [index: string]: string };
  label: string;
  name: string;
  placeholder?: string;
  isDesktop: boolean;
};
