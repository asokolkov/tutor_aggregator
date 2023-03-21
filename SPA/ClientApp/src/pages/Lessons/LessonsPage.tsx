import * as React from 'react';
import { Switch, VStack } from '@chakra-ui/react';
import { ActiveStudentLessons } from './components/ActiveStudentLessons';
import { ActiveTutorLessons } from './components/ActiveTutorLessons';
import { DateEditorTable } from './components/DateEditorTable';
import { ArchiveStudentLessons } from './components/ArchiveStudentLessons';
import { ArchiveTutorLessons } from './components/ArchiveTutorLessons';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { LOGIN_PAGE } from '../../routes/route-paths';

export const LessonsPage = () => {
  const userContext = useContext(UserContext);
  if (!userContext.isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }

  const [isTutor, setIsTutor] = useState(true);

  return (
    <VStack spacing={'2em'}>
      {isTutor ? <ActiveTutorLessons /> : <ActiveStudentLessons />}
      {isTutor && <DateEditorTable />}
      {isTutor ? <ArchiveTutorLessons /> : <ArchiveStudentLessons />}

      <Switch
        isChecked={isTutor}
        onChange={(e) => {
          setIsTutor(e.target.checked);
        }}
      />
    </VStack>
  );
};
