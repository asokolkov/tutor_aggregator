import { Button, SimpleGrid, VStack } from '@chakra-ui/react';
import SearchCardInfo from './components/SearchCardInfo';
import { SearchParamsSection } from './SearchParamsSection';
import './SearchPage.css';
import { LoadBar } from '../sharedComponents/LoadBar/LoadBar';
import { useSearchPageQuery } from '../../query/useSearchPageQuery';
import { useMutation } from 'react-query';
import TutorsAPI from '../../api/tutors';
import { Form, Formik } from 'formik';
import React from 'react';

export interface SearchValuesProps {
  district: string;
  price: string;
  rating: string;
  subject: string;
}

export const SearchPage = () => {
  const { isLoading, data, isFetchingNextPage, fetchNextPage } =
    useSearchPageQuery();

  const onSearchMutation = useMutation({
    mutationFn: (values: SearchValuesProps) => {
      return TutorsAPI.getAllTutors({
        rating: +values.rating,
        maxPrice: +values.price,
        subject: values.subject,
        district: values.district,
        city: null,
      });
    },
  });
  const onSearch = (values: SearchValuesProps) => {
    onSearchMutation.mutate(values);
  };

  const initValues = {
    district: 'Уралмаш',
    price: '-1',
    rating: '-1',
    subject: 'Математика',
  };

  if (isLoading)
    return <LoadBar description={'Загружаем список преподавателей'} />;
  return (
    <VStack spacing={'32px'} align={'start'}>
      <Formik initialValues={initValues} onSubmit={onSearch}>
        <Form style={{ width: '100%' }}>
          <SearchParamsSection />
        </Form>
      </Formik>
      <SimpleGrid
        className={'grid-container'}
        minChildWidth="390px"
        width={'100%'}
      >
        {data.pages.map((x, i) => (
          <React.Fragment key={+(data.pageParams[i] ?? 0)}>
            {x.items.map((item) => (
              <SearchCardInfo tutor={item} key={item.id}></SearchCardInfo>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button onClick={() => fetchNextPage()} isLoading={isFetchingNextPage}>
        Загрузить еще...
      </Button>
    </VStack>
  );
};
