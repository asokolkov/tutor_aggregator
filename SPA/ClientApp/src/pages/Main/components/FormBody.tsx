import * as React from 'react';
import { SelectOptions } from './SelectOptions';
import { Button, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { SearchParamsContext } from '../contexts/SearchParamsContext';

export const FormBody: React.FC = () => {
  const { subjectsData, locationsData } = useContext(SearchParamsContext);
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Grid
      templateAreas={
        isLargerThanTablet
          ? `"subject online district button"`
          : `"subject"
                  "online"
                  "district"
                  "button"`
      }
      gridTemplateRows={isLargerThanTablet ? 'auto' : 'auto auto auto auto'}
      gridTemplateColumns={isLargerThanTablet ? '30% 20% 30% 20%' : '100%'}
      width={isLargerThanTablet ? '80vw' : '100%'}
      maxWidth={'1100px'}
      alignItems={'flex-end'}
      gap={'8px'}
    >
      <GridItem area={'subject'}>
        <SelectOptions
          label={'Предмет'}
          options={subjectsData.map((subject) => subject.description)}
          name="subject"
          placeholder="Любой"
          isDesktop={isLargerThanTablet}
        />
      </GridItem>
      <GridItem area={'district'}>
        <SelectOptions
          label={'Район'}
          options={locationsData.map((location) => location.district)}
          name="district"
          placeholder="Любой"
          isDesktop={isLargerThanTablet}
        />
      </GridItem>
      <GridItem area={'online'}>
        <SelectOptions
          label={'Формат'}
          options={['Онлайн']}
          name="online"
          placeholder="Офлайн"
          isDesktop={isLargerThanTablet}
        />
      </GridItem>
      <GridItem area={'button'}>
        <Button
          variant="green"
          type="submit"
          width={isLargerThanTablet ? 'calc(100% - 12px)' : '100%'}
        >
          Найти
        </Button>
      </GridItem>
    </Grid>
  );
};
