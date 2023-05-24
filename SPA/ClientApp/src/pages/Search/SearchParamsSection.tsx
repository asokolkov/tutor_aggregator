import * as React from 'react';
import {
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { SelectOption } from './components/SelectOption';
import { useOptionMap } from './hooks/useOptionMap';
import { CheckIcon } from '@chakra-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SearchParamsSection: React.FC<Props> = ({ district, subject }) => {
  const { ReviewOptions, PriceOptions } = useOptionMap();
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  if (!subject) {
    subject = 'Любой предмет';
  }
  if (!district) {
    district = 'любой район';
  }

  return (
    <Flex
      direction={isLargerThanTablet ? 'row' : 'column'}
      align={'center'}
      justify={'space-between'}
      margin={'0 -5vw 0 -5vw'}
      padding={isLargerThanTablet ? '20px 5vw' : '16px'}
      bg="custom.blue.100"
      width={'calc(100% + 10vw)'}
      gap={isLargerThanTablet ? '20px' : '12px'}
    >
      <Flex direction={'column'} gap={isLargerThanTablet ? '8px' : '2px'}>
        <Text
          variant={'brand.h1'}
          align={isLargerThanTablet ? 'left' : 'center'}
          color={'custom.blue.300'}
        >
          Результаты поиска
        </Text>
        <Text
          variant={'regular.h2'}
          align={isLargerThanTablet ? 'left' : 'center'}
          color={'custom.blue.300'}
        >
          {subject}, {district}
        </Text>
      </Flex>
      <Grid
        templateAreas={
          isLargerThanTablet
            ? `"price rating button"`
            : `"price button" 
                "rating button"`
        }
        gridTemplateRows={isLargerThanTablet ? 'auto' : 'auto auto'}
        gridTemplateColumns={isLargerThanTablet ? '2fr 2fr 1fr' : '1fr 40px'}
        gap={isLargerThanTablet ? '10px' : '8px'}
        width={isLargerThanTablet ? '40vw' : '92vw'}
        maxWidth={isLargerThanTablet ? '720px' : '92vw'}
        minWidth={isLargerThanTablet ? '450px' : '92vw'}
      >
        <GridItem area={'price'}>
          <SelectOption
            label={'Цена за час'}
            options={Object.keys(PriceOptions)}
            optionsMap={PriceOptions}
            name="price"
            isDesktop={isLargerThanTablet}
          />
        </GridItem>
        <GridItem area={'rating'}>
          <SelectOption
            label={'Рейтинг'}
            options={Object.keys(ReviewOptions)}
            optionsMap={ReviewOptions}
            name="rating"
            isDesktop={isLargerThanTablet}
          />
        </GridItem>
        <GridItem area={'button'} display={'flex'} alignItems={'flex-end'}>
          <Button
            variant={'blue.300'}
            type="submit"
            size={'sm'}
            height={isLargerThanTablet ? '32px' : '100%'}
            width={'100%'}
          >
            {isLargerThanTablet ? 'Применить' : <CheckIcon />}
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  );
};

type Props = {
  district: string;
  subject: string;
};
