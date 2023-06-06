import { useEffect, useMemo, useState } from 'react';
import UserAPI from '../../../api/user';
import axios, { AxiosError } from 'axios';
import { V1UserDto } from '../../../api/models';

export function useUser() {
  const [user, setUser] = useState<V1UserDto>();
  const [isLoading, setLoading] = useState(true);

  const removeUser = () => setUser(undefined);
  const isUserAuth = user !== undefined;

  const providerValues = useMemo(
    () => ({ user, setUser, removeUser, isAuthorized: isUserAuth, isLoading }),
    [user, setUser, removeUser, isUserAuth, isLoading]
  );

  useEffect(() => {
    const abortController = new AbortController();
    UserAPI.getCurrentUser(abortController.signal)
      .then((userDto) => {
        setUser(userDto);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (axios.isCancel(err)) return;
        setLoading(false);
      });
    return () => abortController.abort();
  }, []);

  return { providerValues, isLoading };
}
