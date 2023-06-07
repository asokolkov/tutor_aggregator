import {
  Avatar,
  Box,
  Flex,
  Text,
  HStack,
  useBreakpointValue,
  VStack,
  Button,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
// import ContactsPopoverButton from '../../TutorCard/components/ContactsPopoverButton';

export const SuccessSection: React.FC = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Flex
      direction={isLargerThanTablet ? 'row' : 'column'}
      align={'center'}
      margin={'0 -5vw 0 -5vw'}
      bg={'custom.blue.100'}
      width={'calc(100% + 10vw)'}
    >
      <Box
        bg={isLargerThanTablet ? 'custom.green' : 'custom.blue.100'}
        height={'100%'}
        alignItems={'center'}
        padding={
          isLargerThanTablet ? '10px 60px 10px 5vw' : '20px 10px 20px 10px'
        }
      >
        <VStack spacing={isLargerThanTablet ? '8px' : '16px'}>
          <Text
            variant="brand.h1"
            color={isLargerThanTablet ? 'white' : 'custom.blue.300'}
            align={isLargerThanTablet ? 'left' : 'center'}
          >
            Ты&nbsp;записан к&nbsp;репетитору
          </Text>
          <HStack
            spacing={'10px'}
            width={isLargerThanTablet ? '100%' : 'auto'}
            align={'center'}
          >
            <Avatar name={'props.fullName'} size={'md'} />
            <Text
              variant="regular.h2"
              textAlign={'left'}
              color={isLargerThanTablet ? 'white' : 'custom.blue.300'}
            >
              {'props.fullName'}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Divider
        borderWidth={'1px'}
        borderColor={'custom.blue.200'}
        display={isLargerThanTablet ? 'none' : 'block'}
        width={'80%'}
      ></Divider>
      <VStack
        spacing="8px"
        align={isLargerThanTablet ? 'flex-start' : 'center'}
        p={isLargerThanTablet ? '10px 5vw 10px 30px' : '20px 20px 20px 20px'}
      >
        <Text
          variant={'regular.bold'}
          align={isLargerThanTablet ? 'left' : 'center'}
        >
          Свяжись с&nbsp;преподавателем и&nbsp;уточни детали
        </Text>
        <Button variant="blue.300">Показать контакты</Button>
        {/*<ContactsPopoverButton />*/}
      </VStack>
    </Flex>
  );
};
