import * as React from 'react';
import { Flex, Image, Spacer, Text } from '@chakra-ui/react';
import illustration from '../../../assets/images/mainpage_illustration1.png';

export const MainDescriptionForStudents: React.FC = () => {
  return (
    <Flex justify={'center'} width={'100%'} gap={'7%'} minHeight={'300px'}>
      <Image
        src={illustration}
        maxWidth={'400px'}
        fit={'scale-down'}
        minWidth={'150px'}
        maxHeight={'300px'}
      />
      <Flex
        direction={'column'}
        width={'40%'}
        height={'100%'}
        minHeight={'300px'}
      >
        <Flex direction={'column'}>
          <Text variant={'brand.h1'} color={'custom.blue.300'}>
            Удобный поиск
          </Text>
          <Text color={'custom.blue.300'}>
            Все подходящие преподаватели&nbsp;&mdash; в&nbsp;одной поисковой
            выдаче.
          </Text>
        </Flex>
        <Spacer minHeight={'30px'} />
        <Flex direction={'column'}>
          <Text variant={'brand.h1'} color={'custom.blue.300'}>
            Запись на конкретное время
          </Text>
          <Text color={'custom.blue.300'}>
            Выбирай подходящий временной слот у&nbsp;понравившегося
            преподавателя.
          </Text>
        </Flex>
        <Spacer minHeight={'30px'} />
        <Flex direction={'column'}>
          <Text variant={'brand.h1'} color={'custom.blue.300'}>
            Просмотр контактов
          </Text>
          <Text color={'custom.blue.300'}>
            Связаться с&nbsp;преподавателями можно привычными
            способами&nbsp;&mdash; к&nbsp;примеру, через Телеграм.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
