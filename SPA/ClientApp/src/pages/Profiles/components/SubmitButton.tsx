import * as React from 'react';
import { Flex, Button, useBreakpointValue } from '@chakra-ui/react';

type Props = {
  buttonText: string;
  isDisabled?: boolean;
  isLoading: boolean;
};

export const SubmitButton: React.FC<Props> = ({
  isLoading,
  isDisabled,
  buttonText,
}) => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Flex align={'start'} paddingTop={'10px'}>
      <Button
        width={isLargerThanTablet ? '240px' : '100%'}
        isDisabled={isDisabled}
        variant={'blue.300'}
        type="submit"
        isLoading={isLoading}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};
