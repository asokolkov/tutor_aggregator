import * as React from 'react';
import { Avatar, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FileUpload } from './FileUpload';
import { ChangeEvent, useContext } from 'react';
import AvatarAPI from '../../../api/avatars';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { getFullName } from '../../../utils/names';
import { getAvatarUri } from '../../../utils/helper';

export const AvatarSection: React.FC = () => {
  const onAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const avatarFile = event.target.files[0];
    await AvatarAPI.uploadAvatar(avatarFile);
  };
  const { user } = useContext(UserContext);

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex direction={'column'} align={'center'}>
      <Avatar
        size={'2xl'}
        name={getFullName(user.firstName, user.lastName)}
        src={getAvatarUri(user.id)}
        margin={'0 0 15px 0'}
        colorScheme={'blue'}
      />
      <FileUpload
        accept="image/*"
        onChange={onAvatarChange}
        justify-content={'center'}
      >
        <Button
          size={'xs'}
          variant="blue.300"
          margin={isDesktop ? '0 0 0 0' : '0 0 1.5em 0'}
          justifyContent="center"
        >
          Изменить фото
        </Button>
      </FileUpload>
    </Flex>
  );
};
