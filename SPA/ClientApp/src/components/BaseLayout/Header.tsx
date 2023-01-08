import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import {
  LOGIN_PAGE,
  PROFILE_PAGE,
  SEARCH_PAGE,
  SIGNUP_PAGE,
} from '../../route-paths';
import HeaderButton from './HeaderButton';

const Header: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Container
      as="header"
      pb={{ base: '12', md: '12' }}
      width={'100%'}
      maxWidth={'100%'}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }} width={'100%'} maxWidth={'100%'}>
          <HStack
            spacing="5"
            justify="space-between"
            width={'100%'}
            maxWidth={'100%'}
          >
            <Text as="b" fontSize="lg" color="subtle">
              Репетиторы
            </Text>
            {isDesktop ? (
              <Flex justify="flex-end" flex="10">
                <ButtonGroup spacing="8" margin="0px 40px 0px 0px">
                  <HeaderButton
                    text={'Поиск'}
                    link={SEARCH_PAGE}
                    variant={'link'}
                  />
                  <HeaderButton
                    text={'Профиль'}
                    link={PROFILE_PAGE}
                    variant={'link'}
                  />
                </ButtonGroup>
                <HStack spacing="3">
                  <HeaderButton
                    text={'Зарегистрироваться'}
                    link={SIGNUP_PAGE}
                    variant={'ghost'}
                  />
                  <HeaderButton
                    text={'Войти'}
                    link={LOGIN_PAGE}
                    variant={'ghost'}
                  />
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Header;
