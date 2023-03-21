import * as React from 'react';
import { Flex, Button } from '@chakra-ui/react';

export const SubmitButton = (props: ProfilePageButtonProps) => {
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

type ProfilePageButtonProps = {
  buttonText: string;
  isDisabled: boolean;
};
