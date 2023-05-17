import * as React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from '@chakra-ui/react';
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
  const { removeUser, user } = useContext(UserContext);

  const signOut = async () => {
    await UserAPI.signOut();
    removeUser();
    navigate(LOGIN_PAGE);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="blue.300"
        rightIcon={<ChevronDownIcon />}
      >
        <Avatar src={user.avatar} name={user.name} size="xs" mr="8px"></Avatar>
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
