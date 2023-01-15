import * as React from 'react';
import { Heading, VStack, Text, Input, Button } from '@chakra-ui/react';
import AccountInfoRow from './AccountInfoRow';

export const AccountInfo = () => {
  return (
    <VStack align={'left'} spacing={'8px'}>
      <Heading>Аккаунт</Heading>
      <AccountInfoRow title={'Тип профиля:'} otherJsx={[<Text>ученик</Text>]} />
      <AccountInfoRow
        title={'Почта:'}
        otherJsx={[<Text>theoilside@gmail.com</Text>]}
      />
      <AccountInfoRow
        title={'Телефон:'}
        otherJsx={[<Text>+79995654815</Text>]}
      />
      <AccountInfoRow
        title={'Новый пароль:'}
        otherJsx={[
          <Input
            w={'350px'}
            variant={'outline'}
            size={'md'}
            type={'password'}
          />,
          <Button size={'md'} variant={'solid'}>
            Сохранить
          </Button>,
        ]}
      />
      <Button color={'red'} as={'u'} w={'fit-content'} variant={'link'}>
        Выйти из аккаунта
      </Button>
    </VStack>
  );
};
