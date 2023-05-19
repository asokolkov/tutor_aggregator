import { useEffect, useState } from 'react';
import UserAPI, { User } from '../../api/user';
import axios, { AxiosError } from 'axios';
import { SearchProps } from '../../pages/Main/_formikHelper';

export function useUser() {
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState(true);

  const removeUser = () => setUser(undefined);
  const isUserAuth = user !== undefined;

  useEffect(() => {
    const abortController = new AbortController();
    UserAPI.getCurrentUser(abortController.signal)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (axios.isCancel(err)) return;
        setLoading(false);
      });
    return () => abortController.abort();
  }, []);

  return { user, isLoading, setUser, removeUser, isUserAuth };
}

export function useSearchValues() {
  const [searchValues, setSearchValues] = useState<SearchProps>();
  const hasSearchValues = !!searchValues;

  return { searchValues, setSearchValues, hasSearchValues };
}
