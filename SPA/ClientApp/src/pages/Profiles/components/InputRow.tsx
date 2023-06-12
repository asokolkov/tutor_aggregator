import * as React from 'react';
import { FormControl, FormLabel, Flex, Input } from '@chakra-ui/react';
import { useField } from 'formik';
import { ProfilePageProps, TooltipType } from './_shared';
import { ProfileTip } from './ProfileTip';

type Props = ProfilePageProps & {
  placeholder?: string;
  label: string;
  value?: string;
  maxLength?: number;
};

export const InputRow: React.FC<Props> = (props) => {
  const [field] = useField({ name: props.name });

  return (
    <Flex width={'100%'} align={'center'} maxWidth={'800px'}>
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
          <Input
            placeholder={props.placeholder}
            value={props.value}
            bg="white"
            color={'black'}
            width={'100%'}
            fontSize={'lg'}
            size={'md'}
            isDisabled={props.isDisabled}
            {...field}
            maxLength={props.maxLength || 256}
          />
          <ProfileTip
            label={props.tooltip.label}
            isLockIcon={props.tooltip.type === TooltipType.Lock}
          />
        </Flex>
      </FormControl>
    </Flex>
  );
};
