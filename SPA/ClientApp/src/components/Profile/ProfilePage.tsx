import { ChakraProvider, Flex, HStack, VStack, Button } from '@chakra-ui/react';
import Theme from '../../theme/index';
import { ProfileInfo } from './ProfileInfo';
import { ReviewSection } from './ReviewSection';

export const ProfilePage = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Flex background={'gray.50'} height={'100vh'}>
        <VStack margin={'20px'} width={'100%'}>
          <HStack>
            <ProfileInfo
              name={'Егоров Павел Владимирович'}
              description={
                'Старший преподаватель УрФУ, департамент математики, механики и компьютерных наук'
              }
              location={'Екатеринбург, Свердловская область'}
              occupation={'Высшая математика, компьютерные науки'}
              rating={{ count: 74, average: 4.9 }}
              avatar={''}
            />

            <VStack>
              <Button size={'lg'} colorScheme={'blue'} width={'240px'}>
                Написать сообщение
              </Button>
              <Button size={'lg'} colorScheme={'blue'} width={'240px'}>
                Записаться на занятие
              </Button>
            </VStack>
          </HStack>

          <ReviewSection
            reviews={[
              { name: 'Михаил', rating: 5, review: 'Всё круто!', avatar: '' },
            ]}
          />
        </VStack>
      </Flex>
      <Flex></Flex>
    </ChakraProvider>
  );
};
