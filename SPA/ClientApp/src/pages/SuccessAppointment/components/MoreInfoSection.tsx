import { Text, VStack, HStack } from '@chakra-ui/react';
import React from 'react';

export const MoreInfoSection: React.FC = () => {
  return (
    <VStack
      width={'100%'}
      margin={'20px 0 30px 0'}
      spacing={'5px'}
      alignItems={'left'}
    >
      <HStack>
        <Text variant={'regular.bold'}>Дата:</Text>
        <Text> 29.03.2023</Text>
      </HStack>
      <HStack>
        <Text variant={'regular.bold'}>Время:</Text>
        <Text> 23:60</Text>
      </HStack>
      <HStack>
        <Text variant={'regular.bold'}>Стоимость:</Text>
        <Text> 400 ₽</Text>
      </HStack>
      <HStack>
        <Text marginTop={'20px'}>
          Посмотреть все свои записи можно в&nbsp;разделе &laquo;Мой
          профиль&raquo; &rarr; &laquo;Мои записи&raquo;.
        </Text>
      </HStack>
    </VStack>
  );
};
