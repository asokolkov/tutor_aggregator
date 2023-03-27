import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SelectOptions } from './components/SelectOptions';
import searchIcon from '../../assets/images/search_icon_bg.png';
import { useSearchParams } from 'react-router-dom';

const SearchParams = {
  subject: 'subject',
  district: 'district',
  price: 'price',
  rating: 'rating',
};

export const SearchParamsSection: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [searchParamsState, searchParamsSetState] = useSearchParams({
    district: 'Уралмаш',
    price: 'Любая',
    rating: 'Любой',
    subject: 'Математика',
  });

  const updateSearchParam = (paramName: string, newState: string) => {
    searchParamsState.set(paramName, newState);
    searchParamsSetState(searchParamsState);
  };

  return (
    <Box
      width={'100%'}
      shadow={'md'}
      borderRadius={'5px'}
      borderWidth={'1px'}
      bg="#A0AEC0"
      backgroundImage={isDesktop && searchIcon}
      backgroundPosition={'right bottom'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'14em'}
    >
      <Grid
        templateAreas={
          isDesktop
            ? `"subject subject subject"
                  "district district district"
                  "price rating button"`
            : `"subject subject subject"
                  "district district district"
                  "price price price"
                  "rating rating rating"
                  "button button button"`
        }
        gridTemplateRows={
          isDesktop
            ? 'calc(100% / 3) calc(100% / 3) calc(100% / 3)'
            : '20% 20% 20% 20% 20%'
        }
        gridTemplateColumns={'calc(100% / 3) calc(100% / 3) calc(100% / 3)'}
        rowGap={isDesktop ? '4px' : '3px'}
        columnGap={isDesktop ? '2em' : '2em'}
        width={'calc(100% - 4em)'}
        height={isDesktop ? 'calc(120px + 5em)' : 'calc(200px + 2.8em + 2em)'}
        padding={isDesktop ? '1.5em 16em 1.5em 3em' : '1em 1em 1em 1em'}
      >
        <GridItem area={'subject'} alignItems={'center'}>
          <SelectOptions
            label={'Предмет'}
            options={[
              ['Математика', 'Математика'],
              ['Программирование', 'Программирование'],
              ['История', 'История'],
            ]}
            value={searchParamsState.get(SearchParams.subject)}
            updateState={(newState) =>
              updateSearchParam(SearchParams.subject, newState)
            }
            name="subject"
          />
        </GridItem>
        <GridItem area={'district'}>
          <SelectOptions
            label={'Район'}
            options={[
              ['Уралмаш', 'Уралмаш'],
              ['Ленинский', 'Ленинский'],
              ['Ботанический', 'Ботанический'],
            ]}
            value={searchParamsState.get(SearchParams.district)}
            updateState={(newState) =>
              updateSearchParam(SearchParams.district, newState)
            }
            name="district"
          />
        </GridItem>
        <GridItem area={'price'}>
          <SelectOptions
            label={'Цена'}
            options={[
              ['Любая', '-1'],
              ['< 1000 ₽ за час', '1000'],
              ['< 800 ₽ за час', '800'],
              ['< 700 ₽ за час', '700'],
              ['< 600 ₽ за час', '600'],
              ['< 500 ₽ за час', '500'],
            ]}
            value={searchParamsState.get(SearchParams.price)}
            updateState={(newState) =>
              updateSearchParam(SearchParams.price, newState)
            }
            name="price"
          />
        </GridItem>
        <GridItem area={'rating'}>
          <SelectOptions
            label={'Рейтинг'}
            options={[
              ['Любой', '-1'],
              ['⭐⭐⭐⭐ и более', '4'],
              ['⭐⭐⭐ и более', '3'],
            ]}
            value={searchParamsState.get(SearchParams.rating)}
            updateState={(newState) =>
              updateSearchParam(SearchParams.rating, newState)
            }
            name="rating"
          />
        </GridItem>
        <GridItem area={'button'}>
          <Button
            bg={'#2D3748'}
            color={'white'}
            _hover={{ bg: '#65748D' }}
            _active={{ bg: '#5877AC' }}
            width={'100%'}
            type="submit"
          >
            Найти
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
