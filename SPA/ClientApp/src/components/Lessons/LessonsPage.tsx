import * as React from 'react';
import { Switch, VStack } from '@chakra-ui/react';
import { ActiveStudentLessons } from './components/ActiveStudentLessons';
import { ActiveTutorLessons } from './components/ActiveTutorLessons';
import { DateEditorTable } from './components/DateEditorTable';
import { ArchiveStudentLessons } from './components/ArchiveStudentLessons';
import { ArchiveTutorLessons } from './components/ArchiveTutorLessons';
import { useState } from 'react';

export const LessonsPage = () => {
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
