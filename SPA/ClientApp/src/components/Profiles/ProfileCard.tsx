// @flow
import * as React from 'react';
import {
  Avatar,
  Button,
  HStack,
  Input,
  Select,
  VStack,
  Textarea,
  Switch,
  FormLabel,
} from '@chakra-ui/react';
import { ProfileCardRow } from './ProfileCardRow';
import { useState } from 'react';

export const ProfileCard = () => {
  const [isTutor, setIsTutor] = useState(true);
  return (
    <HStack
      spacing={'36px'}
      borderWidth={'1px'}
      shadow={'md'}
      padding={'40px 64px'}
      align={'start'}
    >
      <VStack spacing={'12px'}>
        <Avatar size={'xl'}></Avatar>
        <Button>Выбрать файл</Button>
        <FormLabel htmlFor="email-alerts" mb="0">
          Dev: IsTutor
        </FormLabel>
        <Switch
          isChecked={isTutor}
          onChange={(e) => {
            setIsTutor(e.target.checked);
          }}
        />
      </VStack>
      <VStack align={'left'}>
        <ProfileCardRow
          title={'Имя и фамилия:'}
          other={[<Input variant={'outline'} size={'md'} w={'500px'} />]}
        />
        <ProfileCardRow
          title={'Город:'}
          other={[<Select placeholder={'Екатеринбург'} w={'500px'} />]}
        />

        {isTutor && (
          <>
            <ProfileCardRow
              title={'Район:'}
              other={[<Select placeholder={'Центр'} w={'500px'} />]}
            />
            <ProfileCardRow
              title={'Образование:'}
              other={[<Input variant={'outline'} size={'md'} w={'500px'} />]}
            />
            <ProfileCardRow
              title={'Место работы:'}
              other={[<Input variant={'outline'} size={'md'} w={'500px'} />]}
            />
          </>
        )}
        <ProfileCardRow title={'О себе:'} other={[<Textarea w={'500px'} />]} />
        <ProfileCardRow
          title={''}
          other={[<Button w={'240px'}>Сохранить</Button>]}
        />
      </VStack>
    </HStack>
  );
};
