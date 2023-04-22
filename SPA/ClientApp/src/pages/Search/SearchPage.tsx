import { Button, SimpleGrid, VStack } from '@chakra-ui/react';
import SearchCardInfo from './components/SearchCardInfo';
import { SearchParamsSection } from './SearchParamsSection';
import './SearchPage.css';
import { LoadBar } from '../sharedComponents/LoadBar/LoadBar';
import {
  SearchValuesProps,
  useSearchPageQuery,
} from '../../query/useSearchPageQuery';
import { Form, Formik } from 'formik';
import React from 'react';

export const SearchPage = () => {
  const {
    isLoading,
    data,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
    values,
    setValues,
  } = useSearchPageQuery();

  if (isLoading || isRefetching)
    return <LoadBar description={'Загружаем список преподавателей'} />;
  return (
    <VStack spacing={'32px'} align={'start'}>
      <Formik
        initialValues={values}
        onSubmit={(v: SearchValuesProps) => setValues(v)}
      >
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
