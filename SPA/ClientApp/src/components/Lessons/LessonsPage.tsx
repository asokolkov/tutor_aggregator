import * as React from 'react';
import { Switch, VStack } from '@chakra-ui/react';
import { ActiveStudentLessons } from './ActiveStudentLessons';
import { ActiveTutorLessons } from './ActiveTutorLessons';
import { DateEditorTable } from './DateEditorTable';
import { ArchiveStudentLessons } from './ArchiveStudentLessons';
import { ArchiveTutorLessons } from './ArchiveTutorLessons';
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
