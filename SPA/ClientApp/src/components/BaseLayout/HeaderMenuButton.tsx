import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@chakra-ui/react';

type HeaderMenuButtonProps = {
  text: string;
  link: string;
};
const HeaderMenuButtonProps: React.FC<HeaderMenuButtonProps> = (props) => {
  return (
    <Link
      to={props.link}
      style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}
    >
      <MenuItem>{props.text}</MenuItem>
    </Link>
  );
};

export default HeaderMenuButtonProps;
