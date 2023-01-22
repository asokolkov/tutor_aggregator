import * as React from 'react';
import { useContext } from 'react';
import { AccountInfo } from './AccountInfo';
import { TutorCard } from './TutorCard';
import { VStack } from '@chakra-ui/react';
import UserContext from '../BaseLayout/UserContext';
import { StudentCard } from './StudentCard';
import { AccountType } from '../../apis/currentUser';

export const ProfilePage = () => {
  const userContext = useContext(UserContext);

  return (
    <VStack spacing={'2em'}>
      {userContext.type === AccountType.Tutor ? <TutorCard /> : <StudentCard />}
      <AccountInfo />
    </VStack>
  );
};
