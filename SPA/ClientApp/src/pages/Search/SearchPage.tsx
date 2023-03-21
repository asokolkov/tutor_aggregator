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
          <SearchCardInfo
            name={item.firstName + ' ' + item.lastName}
            imgSrc={item.avatar}
            education={item.educations}
            job={item.job.place}
            rating={item.rating}
            id={item.id}
            key={item.id}
          ></SearchCardInfo>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
