import * as React from 'react';
import { Avatar, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FileUpload } from './FileUpload';
import { ChangeEvent, useContext } from 'react';
import AvatarAPI from '../../../api/avatars';
import { useAvatarQuery } from '../../../query/useAvatarQuery';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { getFullName } from '../../../utils/names';

export const AvatarSection: React.FC = () => {
  const onAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const avatarFile = event.target.files[0];
    await AvatarAPI.uploadAvatar(avatarFile);
  };
  const { user } = useContext(UserContext);
  const { avatar } = useAvatarQuery(user.id);

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex direction={'column'} align={'center'}>
      <Avatar
        w={'10em'}
        h={'10em'}
        name={getFullName(user.firstName, user.lastName)}
        src={avatar}
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
        >
          Изменить фото
        </Button>
      </FileUpload>
    </Flex>
  );
};
