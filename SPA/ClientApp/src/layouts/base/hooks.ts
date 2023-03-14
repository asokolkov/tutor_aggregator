import { useEffect, useState } from 'react';
import UserAPI, { User } from '../../apis/currentUser';

export function useUser() {
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState(true);

  const removeUser = () => setUser(undefined);
  const isUserAuth = user !== undefined;

  useEffect(() => {
    UserAPI.getCurrentUser()
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        if (e.response.status === 401) removeUser();
        setLoading(false);
      });
  }, []);

  return { user, isLoading, setUser, removeUser, isUserAuth };
}
