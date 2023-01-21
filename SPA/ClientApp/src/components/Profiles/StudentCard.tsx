import * as React from 'react';
import {
  Avatar,
  Button,
  HStack,
  Input,
  Select,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import { ProfileCardRow } from './ProfileCardRow';

export const StudentCard: React.FC = () => {
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

        {false && (
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
