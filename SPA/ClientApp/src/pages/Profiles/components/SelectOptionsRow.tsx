import * as React from 'react';
import { FormControl, FormLabel, Flex, Select } from '@chakra-ui/react';
import { useField } from 'formik';
import { ProfilePageProps, TooltipType } from './_shared';
import { ProfileTip } from './ProfileTip';

type Props = ProfilePageProps & {
  options: string[];
  label: string;
  value?: string;
  placeholder?: string;
};

export const SelectOptionsRow: React.FC<Props> = (props) => {
  const [field] = useField({ name: props.name });

  return (
    <Flex width={'100%'}>
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
          bg="white"
          color={'#000000'}
          width={'100%'}
          fontSize={'lg'}
          isDisabled={props.isDisabled}
          {...field}
        >
          {props.options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
        <ProfileTip
          label={props.tooltip.label}
          isLockIcon={props.tooltip.type === TooltipType.Lock}
        />
      </FormControl>
    </Flex>
  );
};
