import * as React from 'react';
import { useContext } from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { SlotContext } from './contexts/SlotContext';
import { LessonType } from '../../api/models';
import { BiDesktop, BiBuildingHouse } from 'react-icons/bi';

export const PriceAndTypeInfo: React.FC = () => {
  const { type, price } = useContext(SlotContext);
  const isOnline = type === LessonType.online;

  return (
    <Flex justify={'space-between'} w="100%" p="4px 8px">
      <HStack spacing="5px">
        {isOnline ? <BiDesktop /> : <BiBuildingHouse />}
        <Text>{isOnline ? 'Онлайн' : 'Офлайн'}</Text>
      </HStack>
      <Text variant="regular.bold" wordBreak="break-all">
        {price <= 1000 * 1000 ? Math.floor(price) : '>1000000'} ₽
      </Text>
    </Flex>
  );
};
