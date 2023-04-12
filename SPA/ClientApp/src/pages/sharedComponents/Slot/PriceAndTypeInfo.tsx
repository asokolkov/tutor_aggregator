import * as React from 'react';
import { useContext } from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { SlotContext } from '../../../contexts/SlotContext';
import { DesktopIcon } from '../../Lessons/components/Icons/DesktopIcon';
import { BuildingHouseIcon } from '../../Lessons/components/Icons/BuildingHouseIcon';
import { LessonType } from '../../../api/lessons';

export const PriceAndTypeInfo: React.FC = () => {
  const { type, price } = useContext(SlotContext);
  const isOnline = type === LessonType.Online;

  return (
    <Flex justify={'space-between'} w="100%" p="4px 8px">
      <HStack spacing="5px">
        {isOnline ? <DesktopIcon /> : <BuildingHouseIcon />}
        <Text>{isOnline ? 'Онлайн' : 'Оффлайн'}</Text>
      </HStack>
      <Text variant="semibold">{Math.floor(price)} ₽</Text>
    </Flex>
  );
};
