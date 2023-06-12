import { useQuery } from 'react-query';
import { avatarKey } from './queryKeys';

export function useAvatarQuery(userId: string) {
  const query = useQuery({
    queryKey: [avatarKey],
    queryFn: () => `/api/v1/avatars/${userId}`,
  });

  return { avatar: query.data };
}
