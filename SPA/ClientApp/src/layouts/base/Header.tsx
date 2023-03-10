import {
  Avatar,
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Button,
  Spacer,
  Image,
  Text,
  useBreakpointValue,
  VStack,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import {
  LOGIN_PAGE,
  PROFILE_PAGE,
  SEARCH_PAGE,
  SIGNUP_PAGE,
  LESSONS_PAGE,
} from '../../route-paths';
import HeaderButton from './components/HeaderButton';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import HeaderMenuButton from './components/HeaderMenuButton';
import logo from '../../assets/images/teacher_icon.png';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const userState = useContext(UserContext);

  const location = useLocation();
  const isActive = (path: string): boolean => {
    return location.pathname.includes(path);
  };
  return (
    <>
      <Container
        padding={'0vh 5vw 1vh 5vw'}
        as="header"
        pb={{ base: '0', md: '0' }}
        width={'100%'}
        maxWidth={'100%'}
      >
        <Box as="nav" bg="bg-surface">
          <Flex
            py={{ base: '5', lg: '5' }}
            width={'100%'}
            maxWidth={'100%'}
            wrap={'nowrap'}
          >
            <HStack
              spacing="5"
              display={'flex'}
              justifyContent={'left'}
              align={'center'}
              width={'100%'}
              maxWidth={'100%'}
            >
              <Link to={SEARCH_PAGE}>
                <Image src={logo} boxSize="50px" />
              </Link>
              <VStack spacing="0px" align="left">
                <Link to={SEARCH_PAGE}>
                  <Text
                    as="b"
                    fontSize="2xl"
                    color="subtle"
                    _hover={{ color: '#777777' }}
                  >
                    Репетиторы
                  </Text>
                </Link>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg={'white'}
                      leftIcon={<FiMapPin />}
                      iconSpacing={'5px'}
                      height={'auto'}
                      fontSize="xs"
                      color="subtle"
                      padding={'0 20px 0 0'}
                      _hover={{ bg: 'white' }}
                      _active={{
                        bg: 'white',
                        transform: 'scale(1)',
                        borderColor: 'white',
                      }}
                    >
                      <Text as={'u'} _hover={{ color: 'gray' }}>
                        в Екатеринбурге
                      </Text>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      Пока мы работаем только в одном городе :(
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </VStack>
            </HStack>
            {isDesktop ? (
              <>
                <Spacer />
                <Flex justify="center" align={'center'} flex="10">
                  <ButtonGroup spacing="8" margin="0px 40px 0px 0px">
                    <HeaderButton
                      text={'Поиск'}
                      link={SEARCH_PAGE}
                      variant={'link'}
                      isActive={isActive(SEARCH_PAGE)}
                    />
                    <HeaderButton
                      text={'Мои занятия'}
                      link={LESSONS_PAGE}
                      variant={'link'}
                      isActive={isActive(LESSONS_PAGE)}
                    />
                    <HeaderButton
                      text={'Мой профиль'}
                      link={PROFILE_PAGE}
                      variant={'link'}
                      isActive={isActive(PROFILE_PAGE)}
                    />
                  </ButtonGroup>
                  {userState.isAuthorized ? (
                    <HStack spacing={'3'}>
                      <Link to={PROFILE_PAGE}>
                        <Avatar size={'sm'} src={userState.avatar} />
                      </Link>
                    </HStack>
                  ) : (
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
                  )}
                </Flex>
              </>
            ) : (
              <Center>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<HamburgerIcon />}
                    aria-label="Menu"
                    variant="outline"
                  >
                    Меню
                  </MenuButton>
                  <MenuList>
                    <HeaderMenuButton text={'Поиск'} link={SEARCH_PAGE} />
                    <HeaderMenuButton
                      text={'Мои занятия'}
                      link={PROFILE_PAGE}
                    />
                    <MenuDivider />
                    <HeaderMenuButton
                      text={'Зарегистрироваться'}
                      link={SIGNUP_PAGE}
                    />
                    <HeaderMenuButton text={'Войти'} link={LOGIN_PAGE} />
                  </MenuList>
                </Menu>
              </Center>
            )}
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Header;
