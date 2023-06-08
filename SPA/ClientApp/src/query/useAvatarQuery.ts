import { useQuery } from 'react-query';
import { avatarKey } from './queryKeys';
import AvatarAPI from '../api/avatars';

export function useAvatarQuery(userId: string) {
  const query = useQuery({
    queryKey: [avatarKey],
    queryFn: () => AvatarAPI.getAvatarById(userId),
  });

  return { avatar: query.data };
}
