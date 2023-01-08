import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

type HeaderButtonProps = {
  text: string;
  link: string;
  variant: string;
};
const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  return (
    <Link
      to={props.link}
      style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}
    >
      <Button variant={props.variant}>{props.text}</Button>
    </Link>
  );
};

export default HeaderButton;
