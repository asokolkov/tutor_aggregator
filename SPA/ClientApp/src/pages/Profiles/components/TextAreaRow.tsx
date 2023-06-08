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
    <Flex align={'start'}>
      <FormControl display={'flex'} alignItems={'center'}>
        <FormLabel
          fontSize={'xl'}
          margin={'auto 10px auto 0'}
          flex={'0 0 130px'}
          textAlign={'right'}
        >
          {props.label}
        </FormLabel>
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
      </FormControl>
    </Flex>
  );
};
