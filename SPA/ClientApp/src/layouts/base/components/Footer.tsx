import {
  ButtonGroup,
  Container,
  IconButton,
  VStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaVk, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Container padding="5vh" as="footer" role="contentinfo" maxWidth={'100%'}>
      <VStack spacing={{ base: '2', md: '2' }}>
        <Divider color={'lightgray'} />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="VK"
            icon={<FaVk fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Telegram"
            icon={<FaTelegram fontSize="1.25rem" />}
          />
        </ButtonGroup>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()}, Агрегатор репетиторов, 66 Бит
        </Text>
      </VStack>
    </Container>
  );
};

export default Footer;
