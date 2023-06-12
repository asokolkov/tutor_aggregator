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
import { CancelLessonModal } from '../../components/Slot/modals/CancelLessonModal';
import { BookLessonModal } from '../../components/Slot/modals/BookLessonModal';
import { DeleteSlotModal } from '../../components/Slot/modals/DeleteSlotModal';
import { useModal } from '../../components/Slot/hooks/useModal';
import { useContactSlotModal } from '../../components/ContactsModal/hooks/useContactSlotModal';
import { ContactModalContext } from '../../components/ContactsModal/contexts/ContactModalContext';
import { ModalContext } from '../../components/Slot/contexts/ModalContext';
import { ContactsModal } from '../../components/ContactsModal/ContactsModal';
import { ArchiveListTab } from './ArchiveListTab';

export const LessonsPage = () => {
  const { isAuthorized, user } = useContext(UserContext);
  if (!isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }
  const isTutor = user.accountType === V1AccountTypeDto.tutor;
  const { modalProviderValue } = useModal();
  const { contactsProviderValue } = useContactSlotModal();

  return (
    <Tabs>
      <TabList>
        {isTutor && <Tab>Твое расписание</Tab>}
        <Tab>Активные</Tab>
        <Tab>Архивные</Tab>
      </TabList>
      <ContactModalContext.Provider value={contactsProviderValue}>
        <ModalContext.Provider value={modalProviderValue}>
          <CancelLessonModal disclosure={modalProviderValue.cancelDisc} />
          <BookLessonModal disclosure={modalProviderValue.bookDisc} />
          <DeleteSlotModal disclosure={modalProviderValue.deleteDisc} />
          <ContactsModal disclosure={contactsProviderValue.disclosure} />
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
        </ModalContext.Provider>
      </ContactModalContext.Provider>
    </Tabs>
  );
};
