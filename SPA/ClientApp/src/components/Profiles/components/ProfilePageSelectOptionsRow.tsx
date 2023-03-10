import * as React from 'react';
import { FormControl, FormLabel, Flex, Select } from '@chakra-ui/react';

export const ProfilePageSelectOptionsRow = (
  props: ProfilePageSelectOptionsProps
) => {
  const options = props.options.map((option, i) => (
    <option value={'option' + i}>{option}</option>
  ));
  return (
    <Flex width={'100%'} margin={'0 0 10px 0'}>
      <FormControl
        display={'flex'}
        alignItems={'center'}
        isRequired={props.isRequired}
      >
        <FormLabel
          fontSize={'xl'}
          margin={'auto 10px auto 0'}
          flex={'0 0 130px'}
          textAlign={'right'}
        >
          {props.label}
        </FormLabel>
        <Select
          placeholder={props.placeholder}
          value={props.value}
          bg="white"
          color={'#000000'}
          width={'100%'}
          fontSize={'lg'}
          isDisabled={props.isDisabled}
        >
          {options}
        </Select>
        {props.tooltip}
      </FormControl>
    </Flex>
  );
};

type ProfilePageSelectOptionsProps = {
  placeholder: string;
  options: Array<string>;
  label: string;
  isDisabled: boolean;
  isRequired: boolean;
  tooltip: JSX.Element[];
  value?: string;
};
