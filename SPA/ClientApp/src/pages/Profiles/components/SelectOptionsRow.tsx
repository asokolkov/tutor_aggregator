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
    <Flex width={'100%'} maxWidth={'800px'}>
      <FormControl
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        isRequired={props.isRequired}
      >
        <FormLabel
          variant={'misc.field-title'}
          margin={'0 0 2px 0'}
          width={'100%'}
        >
          {props.label}
        </FormLabel>
        <Flex width={'100%'} align={'center'}>
          <Select
            placeholder={props.placeholder}
            bg="white"
            color={'black'}
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
        </Flex>
      </FormControl>
    </Flex>
  );
};
