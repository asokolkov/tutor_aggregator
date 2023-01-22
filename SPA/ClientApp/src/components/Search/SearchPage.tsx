import { VStack, SimpleGrid } from '@chakra-ui/react';
import SearchCardInfo from './SearchCardInfo';
import { useEffect, useState } from 'react';
import TutorsAPI, { Tutor } from '../../apis/tutors';
import SearchParamsSection from './SearchParamsSection';
import './SearchPage.css';
import { LoadBar } from '../BaseLayout/LoadBar';

export const SearchPage = () => {
  const [, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Tutor[]>([]);

  useEffect(() => {
    TutorsAPI.getAllTutors(0, 10).then(
      (result) => {
        setIsLoaded(true);
        setItems(result.items);
      },
      (e) => {
        setIsLoaded(true);
        setError(e);
      }
    );
  }, []);

  if (!isLoaded)
    return <LoadBar description={'Загружаем список преподавателей'} />;
  return (
    <VStack spacing={'32px'} align={'start'}>
      <SearchParamsSection />
      <SimpleGrid
        className={'grid-container'}
        minChildWidth="390px"
        width={'100%'}
      >
        {items.map((item) => (
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
