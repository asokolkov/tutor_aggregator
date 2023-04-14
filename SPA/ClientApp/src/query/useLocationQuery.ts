import { useQuery } from 'react-query';
import { locationsKey } from './queryKeys';
import LocationAPI from '../api/locations';

export function useLocationQuery() {
  const query = useQuery({
    queryKey: locationsKey,
    queryFn: LocationAPI.getLocations,
  });

  return { locationsQuery: query };
}
