import * as React from 'react';
import { Text, Flex, VStack, Image, Spacer } from '@chakra-ui/react';
import illustration from '../../../assets/images/mainpage_illustration2.png';

export const MainDescriptionForTutors: React.FC = () => {
  return (
    <VStack
      margin={'0 -5vw 0 -5vw'}
      bg={'white'}
      width={'calc(100% + 10vw)'}
      boxShadow={'0px -40px 58px -60px rgba(0,0,0,0.75)'}
      marginTop={'60px !important'}
    >
      <Flex justify={'center'} padding={'10px'}>
        <Text variant={'brand.h1'} color={'custom.blue.300'}>
          А если тебе нужно найти учеников...
        </Text>
      </Flex>
      <Flex
        marginTop={'0 !important'}
        justify={'center'}
        width={'calc(100% + 10vw)'}
        gap={'4%'}
        minHeight={'300px'}
        bg={'custom.blue.100'}
        padding={'18px 0 40px 0'}
      >
        <Flex
          direction={'column'}
          width={'30%'}
          height={'100%'}
          minHeight={'300px'}
        >
          <Flex direction={'column'}>
            <Text
              variant={'brand.h1'}
              align={'right'}
              color={'custom.blue.300'}
            >
              Простая регистрация
            </Text>
            <Text align={'right'} color={'custom.blue.300'}>
              Создай профиль преподавателя и&nbsp;расскажи в&nbsp;нем
              о&nbsp;себе.
            </Text>
          </Flex>
          <Spacer minHeight={'30px'} />
          <Flex direction={'column'}>
            <Text
              variant={'brand.h1'}
              align={'right'}
              color={'custom.blue.300'}
            >
              Свое гибкое расписание
            </Text>
            <Text align={'right'} color={'custom.blue.300'}>
              Указывай время и&nbsp;дни, в&nbsp;которые готов заниматься.
            </Text>
          </Flex>
          <Spacer minHeight={'30px'} />
          <Flex direction={'column'}>
            <Text
              variant={'brand.h1'}
              align={'right'}
              color={'custom.blue.300'}
            >
              Список занятий и учеников
            </Text>
            <Text align={'right'} color={'custom.blue.300'}>
              Будущие и&nbsp;прошедшие занятия, а&nbsp;также ученики
              отображаются в&nbsp;твоем профиле.
            </Text>
          </Flex>
        </Flex>
        <Image
          src={illustration}
          maxWidth={'400px'}
          fit={'scale-down'}
          minWidth={'150px'}
          maxHeight={'300px'}
        />
      </Flex>
    </VStack>
  );
};
