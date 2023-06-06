import {
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useMediaQuery,
  Skeleton,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_PAGE } from '../../../routes/routePaths';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import logo from '../../../assets/images/teacher_icon.png';
import { CitySelection } from './CitySelection';
import { LoginButton, RegisterButton } from './HeaderButtons';
import { HeaderMenu } from './HeaderMenu';
import { HeaderAuthMenu } from './HeaderAuthMenu';

const Header: React.FC = () => {
  const { isLoading, isAuthorized } = useContext(UserContext);
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  return (
    <Container padding={'30px 5vw 30px 5vw'} as="header" maxW="100%">
      <Flex w="100%" wrap={'nowrap'} align={'center'}>
        <HStack spacing="3" justify={'left'} align={'center'} flexGrow="1">
          <Link to={MAIN_PAGE} style={{ flexShrink: '0' }}>
            <Image src={logo} boxSize="50px" />
          </Link>
          <VStack spacing="0px" align={'flex-start'}>
            <Link to={MAIN_PAGE}>
              <Text
                height={'36px'}
                variant="brand.logo"
                color={'custom.blue.300'}
              >
                Репетиторы
              </Text>
            </Link>
            <CitySelection />
          </VStack>
        </HStack>
        <Skeleton isLoaded={!isLoading}>
          {!isLoading && isAuthorized ? (
            <HeaderMenu />
          ) : isLargerThanTablet ? (
            <HStack spacing="16px">
              <LoginButton />
              <RegisterButton />
            </HStack>
          ) : (
            <HeaderAuthMenu />
          )}
        </Skeleton>
      </Flex>
    </Container>
  );
};

export default Header;
