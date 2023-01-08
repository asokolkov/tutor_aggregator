import { ChakraProvider, VStack } from '@chakra-ui/react';
import Theme from '../../theme/index';
import { ProfileInfo } from './ProfileInfo';
import { ReviewSection } from './ReviewSection';

export const ProfilePage = () => {
  return (
    <ChakraProvider theme={Theme}>
      <VStack maxW={'100%'} spacing={'40px'}>
        <ProfileInfo
          name={'Егоров Павел Владимирович'}
          description={
            'Старший преподаватель УрФУ, департамент математики, механики и компьютерных наук'
          }
          location={'Екатеринбург, Свердловская область'}
          occupation={'Высшая математика, компьютерные науки'}
          rating={{ count: 74, average: 4.9 }}
          avatar={'https://avatarko.ru/img/kartinka/22/zhivotnye_kot_21031.jpg'}
        />

        <ReviewSection
          reviews={['Михаил', 'Анастасия'].map((x) => ({
            name: x,
            rating: 5,
            review:
              // eslint-disable-next-line max-len
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien et velit suscipit faucibus non vitae leo. Nunc id lectus dolor. Curabitur quis mi metus. Integer ultricies sagittis nibh eu finibus. Nam non nulla eget ipsum vestibulum congue sed sit amet diam. Etiam purus augue, laoreet sit amet nisi eu, ultricies volutpat velit. Nam in dolor eget odio volutpat mattis vitae quis est. Fusce sed elementum risus, vitae porta odio. Nulla non magna consectetur, dictum ante at, tincidunt nisl. Ut maximus lorem et congue hendrerit. Vivamus lobortis, ipsum vel aliquet egestas, eros odio volutpat magna, vitae fermentum lorem ipsum vel nibh. Cras at varius nisi, ac pulvinar justo.',
            avatar:
              'https://avatarko.ru/img/kartinka/22/zhivotnye_kot_21031.jpg',
          }))}
        />
      </VStack>
    </ChakraProvider>
  );
};
