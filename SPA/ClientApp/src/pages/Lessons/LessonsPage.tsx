import * as React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { LOGIN_PAGE } from '../../routes/routePaths';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { YourLessonsTab } from './YourLessonsTab';

export const LessonsPage = () => {
  const userContext = useContext(UserContext);
  if (!userContext.isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }

  return (
    <Tabs>
      <TabList>
        <Tab>Твое расписание</Tab>
        <Tab>Актуальные занятия</Tab>
        <Tab>Архивные занятия</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <HStack spacing="20px" align="stretch">
            <YourLessonsTab />
            <Divider orientation="vertical" style={{ marginBottom: 'auto' }} />
            <YourLessonsTab />
          </HStack>
        </TabPanel>
        <TabPanel />
        <TabPanel />
      </TabPanels>
    </Tabs>
  );
};
