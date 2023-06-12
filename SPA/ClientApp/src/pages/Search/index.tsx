import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
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
import { LessonType } from '../../api/models';

export const SearchPage = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );
  const { hasSearchValues } = useContext(SearchStateContext);
  if (!hasSearchValues) return <Navigate to={MAIN_PAGE} />;

  const { query, values, setValues } = useSearchParams();
  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    query;

  if (isLoading) return <LoadBar description={'Загружаем результаты поиска'} />;
  return (
    <Flex direction={'column'} gap={'30px'}>
      <Flex direction={'column'} gap={'10px'}>
        <Link to={MAIN_PAGE}>
          <Text variant="misc.link" color={Color.blue300}>
            <ArrowBackIcon />
            {isLargerThanTablet
              ? 'Вернуться на главную страницу'
              : 'На главную'}
          </Text>
        </Link>
        <Formik initialValues={values} onSubmit={setValues}>
          <Form style={{ width: '100%' }}>
            <SearchParamsSection
              subject={values.subject}
              district={values.district}
              isOnline={values.lessonType === LessonType.online}
            />
          </Form>
        </Formik>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} spacing="16px">
        {data.pages.map((x, i) => (
          <React.Fragment key={+(data.pageParams[i] ?? 0)}>
            {x.items.map((item) => (
              <SearchCard tutor={item} key={item.id}></SearchCard>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          variant="blue.300"
        >
          Загрузить еще...
        </Button>
      )}
    </Flex>
  );
};
