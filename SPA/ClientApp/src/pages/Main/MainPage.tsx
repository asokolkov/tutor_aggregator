import React from 'react';
import { VStack, Text, Button, HStack } from '@chakra-ui/react';
import { MainSearchBox } from './components/MainSearchBox';

export const MainPage = () => {
  return (
    <VStack spacing={'30px'} align={'start'}>
      <MainSearchBox />
      <VStack spacing={'50px'}>
        <HStack wrap={'wrap'}>
          <Button bg="custom.blue.100" color="black">
            custom.blue.100
          </Button>
          <Button bg="custom.blue.200" color="white">
            custom.blue.200
          </Button>
          <Button bg="custom.blue.300" color="white">
            custom.blue.300
          </Button>
          <Button bg="custom.green" color="white">
            custom.green
          </Button>
          <Button bg="custom.red" color="white">
            custom.red
          </Button>
        </HStack>
        <HStack spacing={'16px'} align={'start'}>
          <VStack>
            <Text variant={'regular.h1'}>regular.h1</Text>
            <Text variant={'regular.h2'}>regular.h2</Text>
            <Text variant={'regular.h3'}>regular.h3</Text>
            <Text>regular.normal</Text>
            <Text variant={'regular.bold'}>regular.bold</Text>
          </VStack>
          <VStack>
            <Text variant={'misc.link'}>misc.link</Text>
            <Text variant={'misc.field-title'}>misc.field_title</Text>
            <Text variant={'misc.button'}>misc.button</Text>
            <Text variant={'misc.logo-addition'}>misc.logo_addition</Text>
            <Text variant={'misc.small-button'}>misc.small_button</Text>
          </VStack>
          <VStack>
            <Text variant={'brand.h1'}>brand.h1</Text>
            <Text variant={'brand.logo'}>brand.logo</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
