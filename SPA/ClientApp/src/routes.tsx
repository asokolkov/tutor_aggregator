import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  AUTH_LAYOUT,
  DEFAULT_LAYOUT,
  LOGIN_PAGE,
  PROFILE_PAGE,
  SEARCH_PAGE,
  SIGNUP_PAGE,
  TUTOR_PAGE,
} from './route-paths';
import BaseLayout from './components/BaseLayout/BaseLayout';
import { TutorCardPage } from './components/TutorCard/TutorCardPage';
import { SearchPage } from './components/Search/SearchPage';
import { LoginPage } from './components/Authorization/LoginPage';
import { SignupPage } from './components/Authorization/SignupPage';
import { ProfilePage } from './components/Profiles/ProfilePage';

const router = createBrowserRouter([
  {
    path: DEFAULT_LAYOUT,
    element: <BaseLayout />,
    children: [
      {
        path: TUTOR_PAGE,
        element: <TutorCardPage />,
      },
      {
        path: SEARCH_PAGE,
        element: <SearchPage />,
      },
      {
        path: PROFILE_PAGE,
        element: <ProfilePage />,
      },
      {
        index: true,
        element: <Navigate to={SEARCH_PAGE} />,
      },
    ],
  },
  {
    path: AUTH_LAYOUT,
    element: <BaseLayout />,
    children: [
      {
        path: LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        path: SIGNUP_PAGE,
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
