import * as React from 'react';
import { Text, Flex, VStack, Image } from '@chakra-ui/react';
import illustration from '../../../assets/images/mainpage_illustration2.png';
import { TutorDescriptionText } from './TutorDescriptionText';
import { Color } from '../../../assets/theme/themeEnum';

export const MainDescriptionForTutors: React.FC = () => {
  return (
    <VStack
      spacing="0"
      margin="0 -5vw 0 -5vw"
      bg={Color.white}
      width="calc(100% + 10vw)"
      boxShadow="0px -40px 58px -60px rgba(0,0,0,0.75)"
    >
      <Flex justify="center" padding="10px">
        <Text variant="brand.h1" color={Color.blue300}>
          А если тебе нужно найти учеников...
        </Text>
      </Flex>
      <Flex
        justify="center"
        width="100%"
        gap="4%"
        bg={Color.blue100}
        padding="18px 0 40px 0"
      >
        <Flex direction="column" width="30%" gap="30px">
          <TutorDescriptionText
            title="Простая регистрация"
            text="Создай профиль преподавателя и&nbsp;расскажи в&nbsp;нем
              о&nbsp;себе."
          />
          <TutorDescriptionText
            title="Свое гибкое расписание"
            text="Указывай время и&nbsp;дни, в&nbsp;которые готов заниматься."
          />
          <TutorDescriptionText
            title="Список занятий и учеников"
            text="Будущие и&nbsp;прошедшие занятия, а&nbsp;также ученики
              отображаются в&nbsp;твоем профиле."
          />
        </Flex>
        <Image src={illustration} fit="scale-down" maxHeight="300px" />
      </Flex>
    </VStack>
  );
};
