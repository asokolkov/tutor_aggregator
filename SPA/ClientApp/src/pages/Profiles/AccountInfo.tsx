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
import { UserContext } from '../../contexts/UserContext';
import { AccountType } from '../../api/currentUser';
import { ProfileContext } from '../../contexts/ProfileContext';
import AccountAPI from '../../api/account';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { useNavigate } from 'react-router-dom';

export const AccountInfo = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const userContext = useContext(UserContext);
  const isTutor = userContext.user.accountType === AccountType.Tutor;
  const navigate = useNavigate();

  const signOut = async () => {
    await AccountAPI.signOut();
    userContext.removeUser();
    navigate(LOGIN_PAGE);
  };

  const profileContext = useContext(ProfileContext);
  if (profileContext.isLoading) return <></>;
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
            <TextRow
              label={'Тип профиля'}
              text={isTutor ? 'репетитор' : 'ученик'}
            />
            <TextRow label={'Почта'} text={'Почта не прикручена в апишке'} />
            <TextRow label={'Телефон'} text={'Телефон не прикручен в апишке'} />
          </Flex>
          <Button
            onClick={signOut}
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
