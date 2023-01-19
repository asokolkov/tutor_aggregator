import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SelectOptions } from './SelectOptions';
import { SwitchOptions } from './SwitchOptions';
import searchIcon from '../../img/search_icon_bg.png';
import { useSearchParams } from 'react-router-dom';

const SearchParams = {
  subject: 'subject',
  district: 'district',
  price: 'price',
  rating: 'rating',
};

const SearchParamsSection: React.FC = () => {
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
    <>
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
                  "online district district"
                  "price rating button"`
              : `"subject subject subject"
                  "online district district"
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
              options={['Математика', 'Программирование', 'История']}
              value={searchParamsState.get(SearchParams.subject)}
              updateState={(newState) =>
                updateSearchParam(SearchParams.subject, newState)
              }
            />
          </GridItem>
          <GridItem area={'online'}>
            <SwitchOptions label={'Онлайн?'} />
          </GridItem>
          <GridItem area={'district'}>
            <SelectOptions
              label={'Район'}
              options={['Уралмаш', 'Ленинский', 'Ботанический']}
              value={searchParamsState.get(SearchParams.district)}
              updateState={(newState) =>
                updateSearchParam(SearchParams.district, newState)
              }
            />
          </GridItem>
          <GridItem area={'price'}>
            <SelectOptions
              label={'Цена'}
              options={['Любая', '< 1000 ₽ за час', '< 900 ₽ за час']}
              value={searchParamsState.get(SearchParams.price)}
              updateState={(newState) =>
                updateSearchParam(SearchParams.price, newState)
              }
            />
          </GridItem>
          <GridItem area={'rating'}>
            <SelectOptions
              label={'Рейтинг'}
              options={['Любой', '⭐⭐⭐⭐ и более', '⭐⭐⭐ и более']}
              value={searchParamsState.get(SearchParams.rating)}
              updateState={(newState) =>
                updateSearchParam(SearchParams.rating, newState)
              }
            />
          </GridItem>
          <GridItem area={'button'}>
            <Button
              bg={'#2D3748'}
              color={'white'}
              _hover={{ bg: '#65748D' }}
              _active={{ bg: '#5877AC' }}
              width={'100%'}
            >
              Найти
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default SearchParamsSection;
