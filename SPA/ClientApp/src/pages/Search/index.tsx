import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import SearchCard from './components/SearchCard';
import { SearchParamsSection } from './SearchParamsSection';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, Navigate } from 'react-router-dom';
import { MAIN_PAGE } from '../../routes/routePaths';
import { Color } from '../../assets/theme/themeEnum';
import { SearchStateContext } from '../../layouts/base/contexts/SearchStateContext';
import { useSearchParams } from './hooks/useSearchParams';

export const SearchPage = () => {
  const { hasSearchValues } = useContext(SearchStateContext);
  if (!hasSearchValues) return <Navigate to={MAIN_PAGE} />;

  const { query, values, setValues } = useSearchParams();
  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    query;

  if (isLoading)
    return <LoadBar description={'Загружаем список преподавателей'} />;
  return (
    <>
      <Link to={MAIN_PAGE}>
        <Text variant="misc.link" color={Color.blue300}>
          <ArrowBackIcon />
          Вернуться на главную страницу
        </Text>
      </Link>
      <VStack spacing={'32px'} align={'start'}>
        <Formik initialValues={values} onSubmit={setValues}>
          <Form style={{ width: '100%' }}>
            <SearchParamsSection
              subject={values.subject}
              district={values.district}
            />
          </Form>
        </Formik>

        <Flex flexWrap="wrap" gap="16px">
          {data.pages.map((x, i) => (
            <React.Fragment key={+(data.pageParams[i] ?? 0)}>
              {x.items.map((item) => (
                <SearchCard tutor={item} key={item.id}></SearchCard>
              ))}
            </React.Fragment>
          ))}
        </Flex>

        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
            variant="green"
          >
            Загрузить еще...
          </Button>
        )}
      </VStack>
    </>
  );
};
