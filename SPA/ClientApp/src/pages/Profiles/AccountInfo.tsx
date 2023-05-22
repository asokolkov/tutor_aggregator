import * as React from 'react';
import { useContext } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TextRow } from './components/TextRow';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { AccountType } from '../../api/user';
import { ProfileContext } from '../../contexts/ProfileContext';
import UserAPI from '../../api/user';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { useNavigate } from 'react-router-dom';

export const AccountInfo = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const userContext = useContext(UserContext);
  const isTutor = userContext.user.accountType === AccountType.Tutor;
  const navigate = useNavigate();

  const signOut = async () => {
    await UserAPI.signOut();
    userContext.removeUser();
    navigate(LOGIN_PAGE);
  };

  const profileContext = useContext(ProfileContext);
  if (profileContext.isLoading) return <></>;
  return (
    <Box width={'100%'} shadow={'md'} borderRadius={'5px'} borderWidth={'1px'}>
      <Flex
        padding={isDesktop ? '15px 3em 15px 3em' : '10px'}
        direction={'column'}
        align="flex-start"
      >
        <Heading
          textAlign={'center'}
          margin={isDesktop ? '0 0 15px 0' : '0 0 10px 0px'}
        >
          Аккаунт
        </Heading>
        <Flex width={'100%'} direction={'column'}>
          <TextRow
            label={'Тип профиля'}
            text={isTutor ? 'репетитор' : 'ученик'}
          />
          <TextRow label={'Почта'} text={'Почта не прикручена в апишке'} />
          <TextRow label={'Телефон'} text={'Телефон не прикручен в апишке'} />
        </Flex>
        <Button onClick={signOut} variant="red" margin={'1em 0 1em 0'}>
          Выйти из аккаунта
        </Button>
      </Flex>
    </Box>
  );
};
