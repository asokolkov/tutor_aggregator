import * as React from 'react';
import {
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SelectOption } from './components/SelectOption';
import { useOptionMap } from './hooks/useOptionMap';
import { CheckIcon } from '@chakra-ui/icons';

export const SearchParamsSection: React.FC<Props> = ({
  district,
  subject,
  isOnline,
}) => {
  const { ReviewOptions, PriceOptions } = useOptionMap();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );
  if (!subject) {
    subject = 'Любой предмет';
  }
  if (!district) {
    district = 'любой';
  }

  return (
    <Flex
      direction={isLargerThanTablet ? 'row' : 'column'}
      align={'center'}
      justify={'space-between'}
      margin={'0 -5vw 0 -5vw'}
      bg={
        isLargerThanTablet
          ? 'linear-gradient(90deg, #C4D7E2 57%, #7C98AA 43%)'
          : 'custom.blue.100'
      }
      padding={'20px 5vw'}
      width={'calc(100% + 10vw)'}
      gap={isLargerThanTablet ? '20px' : '12px'}
    >
      <Flex
        direction={'column'}
        gap={isLargerThanTablet ? '8px' : '2px'}
        maxWidth={isLargerThanTablet ? '55%' : '100%'}
      >
        <Text
          variant={'brand.h1'}
          align={isLargerThanTablet ? 'left' : 'center'}
          color={'custom.blue.300'}
          marginBottom={isLargerThanTablet ? 'auto' : '5px'}
        >
          Результаты поиска
        </Text>
        <Text
          variant={'regular.h2'}
          align={isLargerThanTablet ? 'left' : 'center'}
          color={'custom.blue.300'}
        >
          {subject}, {isOnline ? 'онлайн' : district + ' район'}
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
        width={isLargerThanTablet ? '40%' : '92vw'}
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
  isOnline: boolean;
};
