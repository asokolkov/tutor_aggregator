import * as React from 'react';
import { Flex, Button } from '@chakra-ui/react';

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
  return (
    <Flex align={'start'} padding={'0 0 0 140px'}>
      <Button
        w="240px"
        isDisabled={isDisabled}
        isLoading={isLoading}
        bg={'#2D3748'}
        color={'white'}
        type="submit"
        _hover={{ bg: '#65748D' }}
        _active={{ bg: '#5877AC' }}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};
