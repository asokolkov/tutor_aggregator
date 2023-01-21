import * as React from 'react';
import {
  Flex,
  Box,
  useBreakpointValue,
  Heading,
  Button,
} from '@chakra-ui/react';
import { ProfilePageTextRow } from './ProfilePageTextRow';

export const AccountInfo = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box
        width={'100%'}
        shadow={'md'}
        borderRadius={'5px'}
        borderWidth={'1px'}
      >
        <Flex
          padding={isDesktop ? '15px 3em 15px 3em' : '10px'}
          direction={'column'}
        >
          <Heading
            textAlign={'center'}
            margin={isDesktop ? '0 0 15px 0' : '0 0 10px 0px'}
          >
            Аккаунт
          </Heading>
          <Flex
            width={'100%'}
            align={'left'}
            direction={'column'}
            margin={isDesktop ? '0 0 0 15em' : '0 0 0 0'}
          >
            <ProfilePageTextRow label={'Тип профиля'} text={'ученик'} />
            <ProfilePageTextRow label={'Почта'} text={'theoilside@gmail.com'} />
            <ProfilePageTextRow label={'Телефон'} text={'+79995654815'} />
          </Flex>
          <Button
            color={'red'}
            as={'u'}
            w={'100%'}
            variant={'link'}
            textAlign={'center'}
            margin={'1em 0 1em 0'}
          >
            Выйти из аккаунта
          </Button>
        </Flex>
      </Box>
    </>
  );
};
