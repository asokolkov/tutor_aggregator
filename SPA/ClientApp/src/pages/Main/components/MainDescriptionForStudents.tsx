import * as React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import illustration from '../../../assets/images/mainpage_illustration1.png';
import { StudentDescriptionText } from './StudentDescriptionText';

export const MainDescriptionForStudents: React.FC = () => {
  return (
    <Flex justify="center" gap="7%" width="100%">
      <Image src={illustration} fit="scale-down" maxHeight="300px" />
      <Flex direction="column" width="40%" gap="30px">
        <StudentDescriptionText
          title="Удобный поиск"
          text="Все подходящие преподаватели&nbsp;&mdash; в&nbsp;одной поисковой
            выдаче."
        />
        <StudentDescriptionText
          title="Запись на конкретное время"
          text="Выбирай подходящий временной слот у&nbsp;понравившегося
            преподавателя."
        />
        <StudentDescriptionText
          title="Просмотр контактов"
          text="Связаться с&nbsp;преподавателями можно привычными
            способами&nbsp;&mdash; к&nbsp;примеру, через Телеграм."
        />
      </Flex>
    </Flex>
  );
};
