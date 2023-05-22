import * as React from 'react';
import { useContext, useMemo } from 'react';
import { AccountInfo } from './AccountInfo';
import { TutorCard } from './TutorCard';
import { VStack } from '@chakra-ui/react';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { StudentCard } from './StudentCard';
import { useProfileInfo } from '../../query/useProfilePageQuery';
import { ProfileContext } from '../../contexts/ProfileContext';
import { Navigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { V1AccountTypeDto } from '../../api/models';

export const ProfilePage = () => {
  const userContext = useContext(UserContext);

  if (!userContext.isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }

  const { isLoading, tutorProfile, studentProfile } = useProfileInfo(
    userContext.user.accountType
  );

  const providerValues = useMemo(
    () => ({ isLoading, tutorProfile, studentProfile }),
    [isLoading, studentProfile, tutorProfile]
  );

  const isTutor = userContext.user.accountType === V1AccountTypeDto.tutor;
  if (isLoading)
    return <LoadBar description={'Загружаем данные вашего профиля'} />;

  return (
    <ProfileContext.Provider value={providerValues}>
      <VStack spacing={'2em'}>
        {isTutor ? <TutorCard /> : <StudentCard />}
        <AccountInfo />
      </VStack>
    </ProfileContext.Provider>
  );
};
