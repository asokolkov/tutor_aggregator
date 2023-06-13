import * as React from 'react';
import { useContext } from 'react';
import { Button, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { TextRow } from './components/TextRow';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import UserAPI from '../../api/user';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { useNavigate } from 'react-router-dom';
import { V1AccountTypeDto } from '../../api/models';

export const AccountInfo = () => {
  const { user, removeUser } = useContext(UserContext);
  const isTutor = user.accountType === V1AccountTypeDto.tutor;
  const navigate = useNavigate();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  const signOut = async () => {
    await UserAPI.signOut();
    removeUser();
    navigate(LOGIN_PAGE);
  };

  return (
    <Flex width={'100%'} direction={'column'} align="flex-start">
      <Heading textAlign={'center'} variant={'brand.h1'} marginBottom={'20px'}>
        Аккаунт
      </Heading>
      <Flex width={'100%'} direction={'column'}>
        <TextRow
          label={'Тип аккаунта: '}
          text={isTutor ? 'репетитор' : 'ученик'}
        />
        <TextRow label={'Почта: '} text={user.email} />
        <TextRow label={'Телефон: '} text={user.phone} />
      </Flex>
      <Button
        onClick={signOut}
        variant={'red'}
        margin={'1em 0 1em 0'}
        width={isLargerThanTablet ? '240px' : '100%'}
      >
        Выйти из аккаунта
      </Button>
    </Flex>
  );
};
