import {
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
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import {
  LOGIN_PAGE,
  PROFILE_PAGE,
  SEARCH_PAGE,
  SIGNUP_PAGE,
} from '../../route-paths';
import HeaderButton from './HeaderButton';
import HeaderMenuButton from './HeaderMenuButton';
import logo from '../../img/teacher_icon.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Header: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [openTab, setOpenTab] = useState('Поиск');
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
              width={'100%'}
              maxWidth={'100%'}
            >
              <Link to={SEARCH_PAGE}>
                <Image src={logo} boxSize="50px" />
              </Link>
              <VStack spacing="0px" align="left">
                <Link to={SEARCH_PAGE}>
                  <Text as="b" fontSize="2xl" color="subtle">
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
              <React.Fragment>
                <Spacer />
                <Flex justify="flex-end" flex="10">
                  <ButtonGroup spacing="8" margin="0px 40px 0px 0px">
                    <HeaderButton
                      text={'Поиск'}
                      link={SEARCH_PAGE}
                      variant={'link'}
                      isActive={openTab === 'Поиск'}
                      onClick={() => setOpenTab('Поиск')}
                    />
                    <HeaderButton
                      text={'Мои занятия'}
                      link={PROFILE_PAGE}
                      variant={'link'}
                      isActive={openTab === 'Мои занятия'}
                      onClick={() => setOpenTab('Мои занятия')}
                    />
                    <HeaderButton
                      text={'Мой профиль'}
                      link={PROFILE_PAGE}
                      variant={'link'}
                      isActive={openTab === 'Мой профиль'}
                      onClick={() => setOpenTab('Мой профиль')}
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
              </React.Fragment>
            ) : (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Header;
