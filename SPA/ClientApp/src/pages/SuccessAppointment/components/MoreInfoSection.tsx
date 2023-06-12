import { Text, VStack, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as DomLink, useSearchParams } from 'react-router-dom';
import { LESSONS_PAGE } from '../../../routes/routePaths';

export const MoreInfoSection: React.FC = () => {
  const [search] = useSearchParams();
  return (
    <VStack
      width={'100%'}
      margin={'20px 0 30px 0'}
      spacing={'5px'}
      alignItems={'left'}
    >
      <HStack>
        <Text variant={'regular.bold'}>Дата:</Text>
        <Text>{search.get('date')}</Text>
      </HStack>
      <HStack>
        <Text variant={'regular.bold'}>Время:</Text>
        <Text>{search.get('time')}</Text>
      </HStack>
      <HStack>
        <Text variant={'regular.bold'}>Стоимость:</Text>
        <Text>{search.get('price')}₽ за час</Text>
      </HStack>
      <HStack>
        <Text marginTop={'20px'}>
          Посмотреть все свои записи можно в&nbsp;разделе{' '}
          <Link color="blue.500" as={DomLink} to={LESSONS_PAGE}>
            &laquo;Мой профиль&raquo; &rarr; &laquo;Мои записи&raquo;.
          </Link>
        </Text>
      </HStack>
    </VStack>
  );
};
