import { Flex, VStack, CircularProgress, SimpleGrid } from '@chakra-ui/react';
import SearchCardInfo from './SearchCardInfo';
import { useEffect, useState } from 'react';
import TutorsAPI, { Tutor } from '../../apis/tutors';
import SearchParamsSection from './SearchParamsSection';
import './SearchPage.css';

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
    return (
      <Flex align={'center'} justify={'center'}>
        <CircularProgress
          isIndeterminate
          color="teal"
          size={'100px'}
          value={25}
          thickness="12px"
        />
      </Flex>
    );
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
            rating={{ count: 25, average: item.rating }}
            id={item.id}
            key={item.id}
          ></SearchCardInfo>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
