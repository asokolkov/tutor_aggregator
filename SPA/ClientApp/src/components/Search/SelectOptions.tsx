import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import * as React from 'react';

export const SelectOptions = (props: SelectOptionsProps) => {
  const options = props.options.map((option, i) => (
    <option value={'option' + i}>{option}</option>
  ));
  return (
    <FormControl display={'flex'} alignItems={'center'}>
      <FormLabel
        fontSize={'xl'}
        margin={'auto 10px auto 0'}
        flex={'0 0 90px'}
        textAlign={'right'}
      >
        {props.label}
      </FormLabel>
      <Select
        placeholder={props.placeholder}
        bg="white"
        color="black"
        width={'100%'}
        fontSize={'lg'}
      >
        {options}
      </Select>
    </FormControl>
  );
};

type SelectOptionsProps = {
  placeholder: string;
  options: Array<string>;
  label: string;
};
