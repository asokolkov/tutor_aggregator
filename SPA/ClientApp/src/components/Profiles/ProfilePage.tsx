import * as React from 'react';
import { AccountInfo } from './AccountInfo';
import { ProfileCard } from './ProfileCard';
import { VStack } from '@chakra-ui/react';

export const ProfilePage = () => {
  return (
    <VStack spacing={'40px'}>
      <ProfileCard />
      <AccountInfo />
    </VStack>
  );
};
