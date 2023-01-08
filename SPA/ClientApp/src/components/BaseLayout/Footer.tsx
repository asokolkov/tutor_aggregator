import {
  ButtonGroup,
  Container,
  IconButton,
  VStack,
  HStack,
  Text,
  Divider,
  Link,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaVk, FaTelegram } from 'react-icons/fa';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer: React.FC = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
      maxWidth={'100%'}
    >
      <Divider />
      <VStack spacing={{ base: '2', md: '2' }}>
        <HStack justify="space-between" direction="row" align="center">
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
          <Link href="#" isExternal>
            Написать нам <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
        <HStack
          justify="space-between"
          direction="row"
          align="center"
          margin="10px"
        >
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()}, Агрегатор репетиторов, 66 Бит
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Footer;
