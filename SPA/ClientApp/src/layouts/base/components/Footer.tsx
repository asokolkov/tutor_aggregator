import { Container, VStack, Text, Divider, Stack } from '@chakra-ui/react';
import * as React from 'react';

const Footer: React.FC = () => {
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
          direction={'row'}
          justify={'space-between'}
          width={'100%'}
          align={'center'}
        >
          <Text fontSize="sm" color="custom.blue.200">
            X475 Агрегатор репетиторов 2
          </Text>
          <Text fontSize="sm" color="custom.blue.200">
            &copy; 66 Бит, {new Date().getFullYear()}
          </Text>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Footer;
