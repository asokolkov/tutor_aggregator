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
import { useLocationQuery } from '../../query/useLocationQuery';
import { useSubjectQuery } from '../../query/useSubjectQuery';

export const SearchParamsSection: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { locationsQuery } = useLocationQuery();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { subjectQuery } = useSubjectQuery();

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
            options={
              locationsQuery.isLoading
                ? []
                : locationsQuery.data.items.map((location) => location.district)
            }
            name="subject"
          />
        </GridItem>
        <GridItem area={'district'}>
          <SelectOptions
            label={'Район'}
            options={
              locationsQuery.isLoading
                ? []
                : locationsQuery.data.items.map((location) => location.district)
            }
            name="district"
          />
        </GridItem>
        <GridItem area={'price'}>
          <SelectOptions
            label={'Цена'}
            options={[
              'Любая',
              '< 1000 ₽ за час',
              '< 800 ₽ за час',
              '< 700 ₽ за час',
              '< 600 ₽ за час',
              '< 500 ₽ за час',
            ]}
            name="price"
          />
        </GridItem>
        <GridItem area={'rating'}>
          <SelectOptions
            label={'Рейтинг'}
            options={['Любой', '⭐⭐⭐⭐ и более', '⭐⭐⭐ и более']}
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
