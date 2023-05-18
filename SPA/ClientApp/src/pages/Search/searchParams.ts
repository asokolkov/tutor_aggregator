import { useSearchParams } from 'react-router-dom';

export const [searchParamsState, searchParamsSetState] = useSearchParams({
  district: 'Уралмаш',
  price: 'Любая',
  rating: 'Любой',
  subject: 'Математика',
});

export const updateSearchParam = (paramName: string, newState: string) => {
  searchParamsState.set(paramName, newState);
  searchParamsSetState(searchParamsState);
};

export const SearchParams = {
  subject: 'subject',
  district: 'district',
  price: 'price',
  rating: 'rating',
};
