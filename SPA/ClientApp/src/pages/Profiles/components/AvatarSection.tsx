import * as React from 'react';
import { Avatar, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FileUpload } from './FileUpload';
import { ChangeEvent, useContext, useState } from 'react';
import AvatarAPI from '../../../api/avatars';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { getFullName } from '../../../utils/names';
import { getAvatarUri } from '../../../utils/helper';

export const AvatarSection: React.FC = () => {
  const { user } = useContext(UserContext);
  const [avatarSrc, setAvatarSrc] = useState<string>(getAvatarUri(user.id));
  const [isLoading, setLoading] = useState(false);

  const onAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const avatarFile = event.target.files[0];
    try {
      await AvatarAPI.uploadAvatar(avatarFile);
      setAvatarSrc(getAvatarUri(`${user.id}?${new Date().getTime()}`));
    } catch {}
    setLoading(false);
  };

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex direction={'column'} align={'center'}>
      <Avatar
        w={'10em'}
        h={'10em'}
        name={getFullName(user.firstName, user.lastName)}
        src={avatarSrc}
        margin={'0 0 10px 0'}
        colorScheme={'blue'}
        showBorder
      />
      <FileUpload accept="image/*" onChange={onAvatarChange}>
        <Button
          size={'xs'}
          colorScheme={'blue'}
          margin={isDesktop ? '0 0 0 0' : '0 0 1.5em 0'}
          justifyContent="center"
          isLoading={isLoading}
        >
          Изменить фото
        </Button>
      </FileUpload>
    </Flex>
  );
};
