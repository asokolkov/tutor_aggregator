import * as React from 'react';
import { InfoIcon, LockIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';

export const ProfileTip: React.FC<{ label: string; isLockIcon?: boolean }> = ({
  label,
  isLockIcon,
}) => {
  return (
    <Tooltip label={label} placement={'left-start'}>
      {isLockIcon ? (
        <LockIcon margin={'0 0 0 10px'} />
      ) : (
        <InfoIcon margin={'0 0 0 10px'} />
      )}
    </Tooltip>
  );
};
