import * as React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { LessonCalendarTab } from './LessonCalendarTab';
import { V1AccountTypeDto } from '../../api/models';
import './styles.css';
import { ActiveListTab } from './ActiveListTab';
import { ArchiveListTab } from './ArchiveListTab';

export const LessonsPage = () => {
  const { isAuthorized, user } = useContext(UserContext);
  if (!isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }
  const isTutor = user.accountType === V1AccountTypeDto.tutor;

  return (
    <Tabs>
      <TabList>
        {isTutor && <Tab>Твое расписание</Tab>}
        <Tab>Активные</Tab>
        <Tab>Архивные</Tab>
      </TabList>

      <TabPanels>
        {isTutor && (
          <TabPanel>
            <LessonCalendarTab />
          </TabPanel>
        )}
        <TabPanel>
          <ActiveListTab />
        </TabPanel>
        <TabPanel>
          <ArchiveListTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
