import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';

const BottomProfileDescription: React.FC<BottomProfileDescriptionProps> = ({
  icon,
  text,
}) => {
  return (
    <HStack spacing={'16px'}>
      <Image src={icon} alt={'icon'} w={'24px'} h={'24px'}></Image>
      <Text fontSize="m">{text}</Text>
    </HStack>
  );
};

export default BottomProfileDescription;

interface BottomProfileDescriptionProps {
  icon: string;
  text: string;
}
