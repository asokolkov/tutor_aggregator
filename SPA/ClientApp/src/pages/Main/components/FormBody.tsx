import * as React from 'react';
import { SelectOptions } from './SelectOptions';
import { Button, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import { useContext } from 'react';
import { SearchParamsContext } from '../contexts/SearchParamsContext';

export const FormBody: React.FC = () => {
  const { subjectsData, locationsData } = useContext(SearchParamsContext);
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  return (
    <Grid
      templateAreas={
        isLargerThanTablet
          ? `"subject district button"`
          : `"subject"
                  "district"
                  "button"`
      }
      gridTemplateRows={isLargerThanTablet ? 'auto' : 'auto auto auto'}
      gridTemplateColumns={isLargerThanTablet ? '40% 40% 20%' : '100%'}
      width={isLargerThanTablet ? '80vw' : '92vw'}
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
