import * as React from 'react';
import { FormControl, FormLabel, Flex, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import { ProfilePageProps, TooltipType } from './_shared';
import { ProfileTip } from './ProfileTip';

type Props = ProfilePageProps & {
  placeholder: string;
  label: string;
};

export const TextAreaRow: React.FC<Props> = (props) => {
  const [field] = useField({ name: props.name });

  return (
    <Flex align={'start'} maxWidth={'800px'}>
      <FormControl
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
      >
        <FormLabel
          variant={'misc.field-title'}
          margin={'0 0 2px 0'}
          width={'100%'}
        >
          {props.label}
        </FormLabel>
        <Flex width={'100%'} align={'center'}>
          <Textarea
            placeholder={props.placeholder}
            bg="white"
            color="black"
            width={'100%'}
            height={'13vh'}
            fontSize={'lg'}
            size={'md'}
            resize={'vertical'}
            isDisabled={props.isDisabled}
            {...field}
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
