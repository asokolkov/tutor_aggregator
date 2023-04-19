import * as React from 'react';
import { FormControl, FormLabel, Flex, Input } from '@chakra-ui/react';
import { useField } from 'formik';
import { ProfilePageProps, TooltipType } from './_shared';
import { ProfileTip } from './ProfileTip';

type Props = ProfilePageProps & {
  placeholder?: string;
  label: string;
  value?: string;
};

export const InputRow: React.FC<Props> = (props) => {
  const [field] = useField({ name: props.name });
  return (
    <Flex width={'100%'} margin={'0 0 10px 0'} align={'center'}>
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
        <Input
          placeholder={props.placeholder}
          value={props.value}
          bg="white"
          color={'#000000'}
          width={'100%'}
          fontSize={'lg'}
          size={'md'}
          isDisabled={props.isDisabled}
          {...field}
        />
        <ProfileTip
          label={props.tooltip.label}
          isLockIcon={props.tooltip.type === TooltipType.Lock}
        />
      </FormControl>
    </Flex>
  );
};
