import * as React from 'react';
import { Flex, Button } from '@chakra-ui/react';

export const ProfilePageButtonRow = (props: ProfilePageButtonProps) => {
  return (
    <Flex align={'start'} padding={'0 0 0 140px'}>
      <Button
        w={props.width}
        isDisabled={props.isDisabled}
        bg={'#2D3748'}
        color={'white'}
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
  width: string;
};
