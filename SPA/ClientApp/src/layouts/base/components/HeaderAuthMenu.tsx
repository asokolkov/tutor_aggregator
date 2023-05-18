import * as React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { LOGIN_PAGE, SIGNUP_PAGE } from '../../../routes/routePaths';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const HeaderAuthMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton as={Button}>
        Войти
        <ChevronDownIcon ml="4px" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate(LOGIN_PAGE)}>Войти</MenuItem>
        <MenuItem onClick={() => navigate(SIGNUP_PAGE)}>
          Зарегистрироваться
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
