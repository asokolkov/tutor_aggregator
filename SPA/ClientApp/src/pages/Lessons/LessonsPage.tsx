import * as React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { YourLessonsTab } from './YourLessonsTab/YourLessonsTab';
import { AccountType } from '../../api/user';

export const LessonsPage = () => {
  const { isAuthorized, user } = useContext(UserContext);
  if (!isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }
  const isTutor = user.accountType === AccountType.Tutor;

  return (
    <Tabs>
      <TabList>
        {isTutor && <Tab>Твое расписание</Tab>}
        <Tab>Актуальные занятия</Tab>
        <Tab>Архивные занятия</Tab>
      </TabList>

      <TabPanels>
        {isTutor && (
          <TabPanel>
            <YourLessonsTab />
          </TabPanel>
        )}
        <TabPanel />
        <TabPanel />
      </TabPanels>
    </Tabs>
  );
};
