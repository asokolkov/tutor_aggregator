import { createBrowserRouter } from 'react-router-dom';
import {
  AUTH_LAYOUT,
  DEFAULT_LAYOUT,
  LOGIN_PAGE,
  PROFILE_PAGE,
  SEARCH_PAGE,
  SIGNUP_PAGE,
  FORGOT_PASSWORD_PAGE,
  TUTOR_PAGE,
  LESSONS_PAGE,
  TUTOR_BOOK,
  MAIN_PAGE,
} from './routePaths';
import BaseLayout from '../layouts/base';
import { TutorCardPage } from '../pages/TutorCard/TutorCardPage';
import { SearchPage } from '../pages/Search/SearchPage';
import { LoginPage } from '../pages/Authorization/LoginPage';
import { SignupPage } from '../pages/Authorization/SignupPage';
import { ForgotPasswordPage } from '../pages/Authorization/ForgotPasswordPage';
import { ProfilePage } from '../pages/Profiles/ProfilePage';
import { LessonsPage } from '../pages/Lessons/LessonsPage';
import { TutorBookPage } from '../pages/TutorBook/TutorBookPage';
import { MainPage } from '../pages/Main/MainPage';

const router = createBrowserRouter([
  {
    path: DEFAULT_LAYOUT,
    element: <BaseLayout />,
    children: [
      {
        path: MAIN_PAGE,
        element: <MainPage />,
      },
      {
        path: TUTOR_PAGE,
        element: <TutorCardPage />,
      },
      {
        path: TUTOR_BOOK,
        element: <TutorBookPage />,
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
        path: LESSONS_PAGE,
        element: <LessonsPage />,
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
      {
        path: FORGOT_PASSWORD_PAGE,
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);

export default router;
