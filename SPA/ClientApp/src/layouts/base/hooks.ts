import { useEffect, useState } from 'react';
import UserAPI, { User } from '../../api/currentUser';
import { AxiosError } from 'axios';

export function useUser() {
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState(true);

  const removeUser = () => setUser(undefined);
  const isUserAuth = user !== undefined;

  useEffect(() => {
    UserAPI.getCurrentUser()
      .then((u) => {
        setUser(u);
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 401) {
          removeUser();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { user, isLoading, setUser, removeUser, isUserAuth };
}
