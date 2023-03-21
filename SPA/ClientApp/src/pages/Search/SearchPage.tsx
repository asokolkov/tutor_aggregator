import { SimpleGrid, VStack } from '@chakra-ui/react';
import SearchCardInfo from './components/SearchCardInfo';
import TutorsAPI from '../../api/tutors';
import SearchParamsSection from './SearchParamsSection';
import './SearchPage.css';
import { LoadBar } from '../shared/LoadBar';
import { useQuery } from 'react-query';
import { searchKey } from '../../query/queryKeys';

export const SearchPage = () => {
  const { isLoading, data } = useQuery({
    queryKey: [searchKey],
    queryFn: () => TutorsAPI.getAllTutors(0, 10),
  });

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
