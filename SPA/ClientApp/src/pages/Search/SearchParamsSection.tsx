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
import { PriceOptions, ReviewOptions } from './_formHelper';
import { useContext } from 'react';
import { SearchParamsContext } from '../../contexts/SearchParamsContext';

export const SearchParamsSection: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { subjectsData, locationsData, isRefetching } =
    useContext(SearchParamsContext);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const REMOVE_removeDuplicates = (array: string[]) => {
    return array.filter((item, pos, self) => self.indexOf(item) == pos);
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
            options={REMOVE_removeDuplicates(
              subjectsData.map((subject) => subject.description)
            )}
            name="subject"
            placeholder="Любой"
          />
        </GridItem>
        <GridItem area={'district'}>
          <SelectOptions
            label={'Район'}
            options={REMOVE_removeDuplicates(
              locationsData.map((location) => location.district)
            )}
            name="district"
            placeholder="Любой"
          />
        </GridItem>
        <GridItem area={'price'}>
          <SelectOptions
            label={'Цена'}
            options={Object.keys(PriceOptions)}
            optionsMap={PriceOptions}
            name="price"
          />
        </GridItem>
        <GridItem area={'rating'}>
          <SelectOptions
            label={'Рейтинг'}
            options={Object.keys(ReviewOptions)}
            optionsMap={ReviewOptions}
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
            isLoading={isRefetching}
          >
            Найти
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
