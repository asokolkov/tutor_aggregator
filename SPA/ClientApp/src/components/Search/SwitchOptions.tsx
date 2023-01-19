import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import * as React from 'react';

export const SwitchOptions = (props: SwitchOptionsProps) => {
  return (
    <FormControl display={'flex'} alignItems={'center'} height={'40px'}>
      <FormLabel
        fontSize={'xl'}
        margin={'auto 10px auto 0'}
        flex={'0 0 90px'}
        textAlign={'right'}
      >
        {props.label}
      </FormLabel>
      <Switch id="isOnline" size="lg" width={'auto'} />
    </FormControl>
  );
};

type SwitchOptionsProps = {
  label: string;
};
