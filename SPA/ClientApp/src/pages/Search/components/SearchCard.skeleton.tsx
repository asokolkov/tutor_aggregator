import * as React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle } from '@chakra-ui/react';

export const SearchCardSkeleton: React.FC = () => {
  return (
    <VStack
      minH="402px"
      borderWidth="2px"
      borderColor="blue.200"
      borderRadius="10px"
      padding="20px"
      spacing="20px"
      justify="space-between"
      w="100%"
    >
      <VStack spacing="20px" w="100%" flexGrow="1">
        <VStack spacing="10px" w="100%">
          <SkeletonCircle size="128px" />
          <VStack spacing="5px" w="100%">
            <Skeleton h="32px" w="100%" />
            <Skeleton w="143px" h="24px"></Skeleton>
          </VStack>
        </VStack>

        <VStack align="flex-start" w="100%" spacing={'12px'}>
          <Skeleton w="100%" h="20px"></Skeleton>
          <Skeleton w="100%" h="20px"></Skeleton>
        </VStack>
      </VStack>

      <Button variant="green" size={'md'} w="100%">
        Посмотреть профиль
      </Button>
    </VStack>
  );
};
