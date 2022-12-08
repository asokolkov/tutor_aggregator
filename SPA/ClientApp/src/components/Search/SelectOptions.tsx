import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export const SelectOptions = (props: SelectOptionsProps) => {
  const options = props.options.map((option, i) => (
    <option value={'option' + i}>{option}</option>
  ));
  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      <Select placeholder={props.placeholder}>{options}</Select>
    </FormControl>
  );
};

type SelectOptionsProps = {
  title: string;
  placeholder: string;
  options: Array<string>;
};
