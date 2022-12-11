import {
  ButtonGroup,
  Container,
  IconButton,
  VStack,
  HStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
      <Divider />
      <VStack spacing={{ base: '4', md: '5' }} width={'100%'}>
        <HStack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Репетиторы, Inc. All rights
            reserved.
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Footer;
