import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import * as React from 'react';

export const SelectOptions = (props: SelectOptionsProps) => {
  const options = props.options.map((option) => (
    <option value={option[1]} key={option[1]}>
      {option[0]}
    </option>
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
        bg="white"
        color="black"
        width={'100%'}
        fontSize={'lg'}
        value={props.value}
        onChange={(e) => props.updateState(e.target.value)}
      >
        {options}
      </Select>
    </FormControl>
  );
};

type SelectOptionsProps = {
  value: string | number;
  options: Array<Array<string>>;
  label: string;
  updateState: (newState: string) => void;
};
