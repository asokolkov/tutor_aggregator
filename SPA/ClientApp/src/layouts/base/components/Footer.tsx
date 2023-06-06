import {
  ButtonGroup,
  Container,
  IconButton,
  VStack,
  Text,
  Divider,
  Stack,
  Button,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaVk, FaTelegram } from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Footer: React.FC = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  return (
    <Container
      padding="30px 5vw 2vh 5vw"
      as="footer"
      role="contentinfo"
      maxWidth={'100%'}
    >
      <VStack spacing={{ base: '2', md: '2' }}>
        <Divider color={'custom.blue.200'} opacity={'1'} borderWidth={'1px'} />
        <Stack
          direction={isLargerThanTablet ? 'row' : 'column'}
          justify={isLargerThanTablet ? 'space-between' : 'flex-start'}
          width={'100%'}
          align={'center'}
        >
          <ButtonGroup variant="ghost" spacing={'10px'}>
            <IconButton
              color="custom.blue.200"
              as="a"
              href="#"
              aria-label="VK"
              icon={<FaVk fontSize="1.25rem" />}
            />
            <IconButton
              color="custom.blue.200"
              as="a"
              href="#"
              aria-label="Telegram"
              icon={<FaTelegram fontSize="1.25rem" />}
            />
            <Divider orientation="vertical" />
            <Button
              variant={'link'}
              color="custom.blue.200"
              leftIcon={<EmailIcon />}
            >
              Написать нам
            </Button>
          </ButtonGroup>
          <Text fontSize="sm" color="custom.blue.200">
            &copy; {new Date().getFullYear()}, Агрегатор репетиторов, 66 Бит
          </Text>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Footer;
