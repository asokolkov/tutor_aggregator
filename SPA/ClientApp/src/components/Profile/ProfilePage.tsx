import {ChakraProvider, Flex, HStack, VStack, Button} from '@chakra-ui/react';
import Theme from '../../theme/index';
import {ProfileInfo} from "./ProfileInfo";
import {ReviewSection} from "./ReviewSection";

export const ProfilePage = () => {
    const url = 'https://www.flaticon.com/download/icon/560277?icon_id=560277&author=250&team=250&keyword=Programmer&pack=packs%2Fprofession-avatars-3&style=15&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&search=programmer';
    return (
        <ChakraProvider theme={Theme}>
            <Flex background="gray.50" height={'100vh'}>
                <VStack margin={'20px'} width={'100%'}>
                    <HStack>
                        <ProfileInfo name={'Егоров Павел Владимирович'}
                                     description={'Старший преподаватель УрФУ, департамент математики, механики и компьютерных наук'}
                                     location={'Екатеринбург, Свердловская область'}
                                     occupation={'Высшая математика, компьютерные науки'}
                                     rating={{count: 74, average: 4.9}}
                                     avatar={url}/>


                        <VStack>
                            <Button size={'lg'} colorScheme={'blue'} width={'240px'}>Написать сообщение</Button>
                            <Button size={'lg'} colorScheme={'blue'} width={'240px'}>Записаться на занятие</Button>
                        </VStack>

                    </HStack>
                <ReviewSection reviews={[{name: 'Михаил', rating: 5, review: 'Всё круто!', avatar: url}]}/>
                </VStack>

            </Flex>
            <Flex>
            </Flex>
        </ChakraProvider>
    );
};