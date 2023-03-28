import * as React from 'react';
import { Flex, Button } from '@chakra-ui/react';

type Props = {
  buttonText: string;
  isDisabled?: boolean;
};

export const SubmitButton: React.FC<Props> = (props) => {
  return (
    <Flex align={'start'} padding={'0 0 0 140px'}>
      <Button
        w="240px"
        isDisabled={props.isDisabled}
        bg={'#2D3748'}
        color={'white'}
        type="submit"
        _hover={{ bg: '#65748D' }}
        _active={{ bg: '#5877AC' }}
      >
        {props.buttonText}
      </Button>
    </Flex>
  );
};
