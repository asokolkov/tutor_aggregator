import * as React from 'react';
import { FormControl, FormLabel, Flex, Textarea } from '@chakra-ui/react';

export const ProfilePageTextAreaRow = (props: ProfilePageTextAreaProps) => {
  return (
    <Flex align={'start'} margin={'0 0 10px 0'}>
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
        />
        {props.tooltip}
      </FormControl>
    </Flex>
  );
};

type ProfilePageTextAreaProps = {
  placeholder: string;
  label: string;
  isDisabled: boolean;
  tooltip: JSX.Element[];
};
