import * as React from 'react';
import { Avatar, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FileUpload } from './FileUpload';
import { ChangeEvent, useContext, useState } from 'react';
import AvatarAPI from '../../../api/avatars';
import { UserContext } from '../../../layouts/base/contexts/UserContext';
import { getFullName } from '../../../utils/names';
import { useAvatarQuery } from '../../../query/useAvatarQuery';
import { useMutation } from 'react-query';

export const AvatarSection: React.FC = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);

  const onAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const avatarFile = event.target.files[0];
    try {
      await AvatarAPI.uploadAvatar(avatarFile);
    } catch {}
    setLoading(false);
  };

  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { avatar } = useAvatarQuery(user.id);

  const mutation = useMutation({
    mutationFn: onAvatarChange,
    onSuccess: () => window.location.reload(),
  });

  return (
    <Flex direction={'column'} align={'center'}>
      <Avatar
        size={'2xl'}
        name={getFullName(user.firstName, user.lastName)}
        src={avatar}
        margin={'0 0 15px 0'}
        colorScheme={'blue'}
      />
      <FileUpload accept="image/*" onChange={mutation.mutate}>
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
