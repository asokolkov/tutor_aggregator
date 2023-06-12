import * as React from 'react';
import { Flex, Button, useBreakpointValue } from '@chakra-ui/react';

type Props = {
  buttonText: string;
  isDisabled?: boolean;
};

export const SubmitButton: React.FC<Props> = (props) => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Flex align={'start'} paddingTop={'10px'}>
      <Button
        width={isLargerThanTablet ? '240px' : '100%'}
        isDisabled={props.isDisabled}
        variant={'blue.300'}
        type="submit"
      >
        {props.buttonText}
      </Button>
    </Flex>
  );
};
