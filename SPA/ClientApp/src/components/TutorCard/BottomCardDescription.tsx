import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';

const BottomCardDescription: React.FC<BottomCardDescriptionProps> = ({
  icon,
  text,
}) => {
  return (
    <HStack spacing={'16px'} w={'100%'}>
      <Image src={icon} alt={'icon'} w={'24px'} h={'24px'}></Image>
      <Text fontSize="m">{text}</Text>
    </HStack>
  );
};

export default BottomCardDescription;

interface BottomCardDescriptionProps {
  icon: string;
  text: string;
}
