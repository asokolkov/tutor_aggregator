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

type Props = {};
const SearchParamsSection: React.FC<Props> = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box
        width={'100%'}
        shadow={'md'}
        borderRadius={'5px'}
        borderWidth={'1px'}
        bg="#A0AEC0"
        backgroundImage={isDesktop ? searchIcon : NaN}
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
              placeholder={'Математика'}
              options={['Программирование', 'История']}
            />
          </GridItem>
          <GridItem area={'online'}>
            <SwitchOptions label={'Онлайн?'} />
          </GridItem>
          <GridItem area={'district'}>
            <SelectOptions
              label={'Район'}
              placeholder={'Уралмаш'}
              options={['Ленинский', 'Ботанический']}
            />
          </GridItem>
          <GridItem area={'price'}>
            <SelectOptions
              label={'Цена'}
              placeholder={'Любая'}
              options={['< 1000 ₽ за час', '< 900 ₽ за час']}
            />
          </GridItem>
          <GridItem area={'rating'}>
            <SelectOptions
              label={'Рейтинг'}
              placeholder={'Любой'}
              options={['⭐⭐⭐⭐ и более', '⭐⭐⭐ и более']}
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
