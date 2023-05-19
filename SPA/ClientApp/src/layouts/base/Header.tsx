import { Container, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_PAGE } from '../../routes/routePaths';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/images/teacher_icon.png';
import { CitySelection } from './components/CitySelection';
import { LoginButton, RegisterButton } from './components/HeaderButtons';
import { HeaderMenu } from './components/HeaderMenu';

const Header: React.FC = () => {
  const userState = useContext(UserContext);

  return (
    <Container padding={'0vh 5vw 1vh 5vw'} as="header" maxW="100%">
      <Flex py={{ base: '5', lg: '5' }} w="100%" wrap={'nowrap'}>
        <HStack spacing="5" justify={'left'} align={'center'} w="100%">
          <Link to={MAIN_PAGE}>
            <Image src={logo} boxSize="50px" />
          </Link>
          <VStack spacing="0px">
            <Link to={MAIN_PAGE}>
              <Text variant="brand.logo">Репетиторы</Text>
            </Link>
            <CitySelection />
          </VStack>
        </HStack>
        {userState.isAuthorized ? (
          <HeaderMenu />
        ) : (
          <HStack spacing="16px">
            <LoginButton />
            <RegisterButton />
          </HStack>
        )}
      </Flex>
    </Container>
  );
};

export default Header;
