import { FormControl, FormLabel, Select, Skeleton } from '@chakra-ui/react';
import * as React from 'react';
import { useField } from 'formik';
import { SearchParamsContext } from '../contexts/SearchParamsContext';
import { useContext } from 'react';

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  options,
  optionsMap,
  label,
  name,
  placeholder,
  isDesktop,
}) => {
  const [field] = useField({ name });
  const { isLoading } = useContext(SearchParamsContext);

  return (
    <FormControl
      display={'flex'}
      flexDirection={isDesktop ? 'column' : 'row'}
      alignItems={isDesktop ? 'flex-start' : 'center'}
    >
      <FormLabel
        variant={'misc.field-title'}
        margin={isDesktop ? '0 0 2px 0' : '0 2px 0 0'}
        width={isDesktop ? 'auto' : '100px'}
      >
        {label}
      </FormLabel>
      <Skeleton isLoaded={!isLoading} w="100%">
        <Select
          {...field}
          bg="white"
          color="black"
          width={'100%'}
          fontSize={'lg'}
          placeholder={placeholder}
        >
          {options?.map((option) => (
            <option
              value={optionsMap ? optionsMap[option] : option}
              key={option}
            >
              {option}
            </option>
          ))}
        </Select>
      </Skeleton>
    </FormControl>
  );
};

type SelectOptionsProps = {
  options: string[];
  optionsMap?: { [index: string]: number };
  label: string;
  name: string;
  placeholder?: string;
  isDesktop: boolean;
};
