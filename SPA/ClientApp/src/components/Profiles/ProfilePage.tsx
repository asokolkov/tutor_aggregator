import * as React from 'react';
import { AccountInfo } from './AccountInfo';
import { TutorCard } from './TutorCard';
import { VStack } from '@chakra-ui/react';

export const ProfilePage = () => {
  return (
    <VStack spacing={'2em'}>
      <TutorCard />
      <AccountInfo />
    </VStack>
  );
};
