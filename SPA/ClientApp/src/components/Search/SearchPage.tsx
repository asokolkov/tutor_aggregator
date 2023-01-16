import {
  Flex,
  VStack,
  Heading,
  CircularProgress,
  Grid,
} from '@chakra-ui/react';
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
      <Heading as="h3" size="xl" marginLeft={'3%'}>
        Поиск наставника
      </Heading>
      <SearchParamsSection />
      <VStack>
        <Grid className={'grid-container'}>
          {items.map((item) => (
            <SearchCardInfo
              name={item.firstName + ' ' + item.lastName}
              imgSrc={item.avatar}
              description={
                // eslint-disable-next-line max-len
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien et velit suscipit faucibus non vitae leo. Nunc id lectus dolor. Curabitur quis mi metus. Integer ultricies sagittis nibh eu finibus. Nam non nulla eget ipsum vestibulum congue sed sit amet diam. Etiam purus augue, laoreet sit amet nisi eu, ultricies volutpat velit. Nam in dolor eget odio volutpat mattis vitae quis est. Fusce sed elementum risus, vitae porta odio. Nulla non magna consectetur, dictum ante at, tincidunt nisl. Ut maximus lorem et congue hendrerit. Vivamus lobortis, ipsum vel aliquet egestas, eros odio volutpat magna, vitae fermentum lorem ipsum vel nibh. Cras at varius nisi, ac pulvinar justo.'
              }
              rating={{ count: 25, average: item.rating }}
              id={item.id}
              key={item.id}
            ></SearchCardInfo>
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
};
