import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

type HeaderButtonProps = {
  text: string;
  link: string;
  variant: string;
  isActive?: boolean;
  onClick?: () => void;
};
const HeaderButton: React.FC<HeaderButtonProps> = ({
  isActive,
  onClick,
  variant,
  text,
  link,
}) => {
  return (
    <Link
      to={link}
      style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}
    >
      <Button
        colorScheme={isActive && 'blue'}
        variant={variant}
        onClick={onClick}
      >
        <p
          style={
            isActive
              ? {
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }
              : {}
          }
        >
          {text}
        </p>
      </Button>
    </Link>
  );
};

export default HeaderButton;
