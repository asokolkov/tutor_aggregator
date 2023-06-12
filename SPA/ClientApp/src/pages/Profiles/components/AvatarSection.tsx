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
        size={'2xl'}
        name={getFullName(user.firstName, user.lastName)}
        src={avatarSrc}
        margin={'0 0 15px 0'}
        colorScheme={'blue'}
      />
      <FileUpload accept="image/*" onChange={onAvatarChange}>
        <Button
          size={'xs'}
          variant="blue.300"
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
