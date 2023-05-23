import * as React from 'react';
import { Text, Flex, VStack, Image, useMediaQuery } from '@chakra-ui/react';
import illustration from '../../../assets/images/mainpage_illustration2.png';
import { TutorDescriptionText } from './TutorDescriptionText';
import { Color } from '../../../assets/theme/themeEnum';

export const MainDescriptionForTutors: React.FC = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  return (
    <VStack
      spacing="0"
      margin="0 -5vw 0 -5vw"
      bg={Color.white}
      width="calc(100% + 10vw)"
      boxShadow="0px -40px 58px -60px rgba(0,0,0,0.75)"
    >
      <Flex justify="center" padding="10px">
        <Text
          variant="brand.h1"
          color={Color.blue300}
          align={isLargerThanTablet ? 'start' : 'center'}
        >
          А если тебе нужно найти учеников...
        </Text>
      </Flex>
      <Flex
        direction={isLargerThanTablet ? 'row' : 'column'}
        justify="center"
        align={'center'}
        gap="30px"
        width="100%"
        bg={Color.blue100}
        padding="30px 0 40px 0"
      >
        <Flex
          direction="column"
          width={isLargerThanTablet ? '40%' : '100%'}
          gap="30px"
        >
          <TutorDescriptionText
            title="Простая регистрация"
            text="Создай профиль преподавателя и&nbsp;расскажи в&nbsp;нем
              о&nbsp;себе."
            isDesktop={isLargerThanTablet}
          />
          <TutorDescriptionText
            title="Свое гибкое расписание"
            text="Указывай время и&nbsp;дни, в&nbsp;которые готов заниматься."
            isDesktop={isLargerThanTablet}
          />
          <TutorDescriptionText
            title="Список занятий и учеников"
            text="Будущие и&nbsp;прошедшие занятия, а&nbsp;также ученики
              отображаются в&nbsp;твоем профиле."
            isDesktop={isLargerThanTablet}
          />
        </Flex>
        <Image src={illustration} fit="scale-down" maxHeight={'300px'} />
      </Flex>
    </VStack>
  );
};
