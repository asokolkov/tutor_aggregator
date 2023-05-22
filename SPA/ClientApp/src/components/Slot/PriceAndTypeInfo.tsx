import * as React from 'react';
import { useContext } from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { SlotContext } from './contexts/SlotContext';
import { DesktopIcon } from '../../assets/icons/DesktopIcon';
import { BuildingHouseIcon } from '../../assets/icons/BuildingHouseIcon';
import { LessonType } from '../../api/models';

export const PriceAndTypeInfo: React.FC = () => {
  const { type, price } = useContext(SlotContext);
  const isOnline = type === LessonType.online;

  return (
    <Flex justify={'space-between'} w="100%" p="4px 8px">
      <HStack spacing="5px">
        {isOnline ? <DesktopIcon /> : <BuildingHouseIcon />}
        <Text>{isOnline ? 'Онлайн' : 'Оффлайн'}</Text>
      </HStack>
      <Text variant="regular.bold" wordBreak="break-all">
        {price <= 1000 * 1000 ? Math.floor(price) : '>1000000'} ₽
      </Text>
    </Flex>
  );
};
