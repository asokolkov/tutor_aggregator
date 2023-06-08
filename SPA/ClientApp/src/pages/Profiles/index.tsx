import * as React from 'react';
import { useContext, useMemo } from 'react';
import { AccountInfo } from './AccountInfo';
import { TutorCard } from './TutorCard';
import { VStack } from '@chakra-ui/react';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { StudentCard } from './StudentCard';
import { ProfileContext } from './contexts/ProfileContext';
import { Navigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { V1AccountTypeDto } from '../../api/models';
import { useProfilePage } from './hooks/useProfilePage';

export const ProfilePage = () => {
  const { isAuthorized, user } = useContext(UserContext);
  if (!isAuthorized) return <Navigate to={LOGIN_PAGE} />;

  const { tutor, student, subjects, locations, isLoading } = useProfilePage();

  const providerValues = useMemo(
    () => ({ tutor, student, subjects, locations, isLoading }),
    [tutor, student, subjects, locations, isLoading]
  );

  const isTutor = user.accountType === V1AccountTypeDto.tutor;
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
