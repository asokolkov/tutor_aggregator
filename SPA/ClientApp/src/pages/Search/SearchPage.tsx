import { SimpleGrid, VStack } from '@chakra-ui/react';
import SearchCardInfo from './components/SearchCardInfo';
import SearchParamsSection from './SearchParamsSection';
import './SearchPage.css';
import { LoadBar } from '../sharedComponents/LoadBar';
import { useSearchPageQuery } from '../../query/useSearchPageQuery';

export const SearchPage = () => {
  const { isLoading, data } = useSearchPageQuery();

  if (isLoading)
    return <LoadBar description={'Загружаем список преподавателей'} />;
  return (
    <VStack spacing={'32px'} align={'start'}>
      <SearchParamsSection />
      <SimpleGrid
        className={'grid-container'}
        minChildWidth="390px"
        width={'100%'}
      >
        {data.items.map((item) => (
          <SearchCardInfo tutor={item}></SearchCardInfo>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
