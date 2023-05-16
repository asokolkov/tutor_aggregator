import * as React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Color } from '../../../assets/theme/themeEnum';
import { useNavigate } from 'react-router-dom';
import {
  LESSONS_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  SEARCH_PAGE,
} from '../../../routes/routePaths';
import UserAPI from '../../../api/user';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export const HeaderMenu: React.FC = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const signOut = async () => {
    await UserAPI.signOut();
    userContext.removeUser();
    navigate(LOGIN_PAGE);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Мой профиль
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate(SEARCH_PAGE)}>Поиск</MenuItem>
        <MenuItem onClick={() => navigate(LESSONS_PAGE)}>Мои занятия</MenuItem>
        <MenuItem onClick={() => navigate(PROFILE_PAGE)}>О себе</MenuItem>
        <MenuItem color={Color.red} onClick={signOut}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
