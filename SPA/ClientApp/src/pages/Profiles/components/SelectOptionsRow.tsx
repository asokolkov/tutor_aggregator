import * as React from 'react';
import { FormControl, FormLabel, Flex, Select } from '@chakra-ui/react';
import { useField } from 'formik';
import { ProfilePageProps } from './share';

type Props = ProfilePageProps & {
  optionLabels: string[];
  optionValues: string[];
  label: string;
  tooltip: JSX.Element[];
  value?: string;
};

export const SelectOptionsRow: React.FC<Props> = (props) => {
  const [field] = useField({ name: props.name });
  const options = props.optionLabels.map((option, i) => (
    <option value={props.optionValues[i]}>{option}</option>
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
          value={props.value}
          bg="white"
          color={'#000000'}
          width={'100%'}
          fontSize={'lg'}
          isDisabled={props.isDisabled}
          {...field}
        >
          {options}
        </Select>
        {props.tooltip}
      </FormControl>
    </Flex>
  );
};
