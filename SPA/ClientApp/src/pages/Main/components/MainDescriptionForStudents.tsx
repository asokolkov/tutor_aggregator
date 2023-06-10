import * as React from 'react';
import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import illustration from '../../../assets/images/mainpage_illustration1.png';
import { StudentDescriptionText } from './StudentDescriptionText';

export const MainDescriptionForStudents: React.FC = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Flex
      direction={isLargerThanTablet ? 'row' : 'column'}
      justify="center"
      align={'center'}
      gap="30px"
      width="100%"
    >
      <Image
        src={illustration}
        fit="scale-down"
        maxHeight={'300px'}
        order={isLargerThanTablet ? '0' : '1'}
      />
      <Flex
        direction="column"
        width={isLargerThanTablet ? '40%' : '100%'}
        gap="30px"
      >
        <StudentDescriptionText
          title="Удобный поиск"
          text="Все подходящие преподаватели&nbsp;&mdash; в&nbsp;одной поисковой
            выдаче."
          isDesktop={isLargerThanTablet}
        />
        <StudentDescriptionText
          title="Запись на конкретное время"
          text="Выбирай подходящий временной слот у&nbsp;понравившегося
            преподавателя."
          isDesktop={isLargerThanTablet}
        />
        <StudentDescriptionText
          title="Просмотр контактов"
          text="Связаться с&nbsp;преподавателями можно привычными
            способами&nbsp;&mdash; к&nbsp;примеру, через Телеграм."
          isDesktop={isLargerThanTablet}
        />
      </Flex>
    </Flex>
  );
};
