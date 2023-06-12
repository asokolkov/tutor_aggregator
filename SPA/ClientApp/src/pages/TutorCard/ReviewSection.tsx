import { SingleReview } from './components/SingleReview';
import { Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { MapSingleReview } from './_mapper';
import { V1ReviewDtoV1PageDto } from '../../api/models';

export const ReviewSection: React.FC<Props> = ({ reviews }) => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <VStack w="100%" spacing="20px" align="start" marginTop={'30px !important'}>
      <Flex
        gap={isLargerThanTablet ? '30px' : '0'}
        alignItems={'center'}
        w="100%"
        justify={isLargerThanTablet ? 'flex-start' : 'space-between'}
      >
        <Flex direction={'column'}>
          <Text variant="brand.h1">Отзывы</Text>
          <Text variant="regular.bold">
            Всего отзывов: {reviews.items.length}
          </Text>
        </Flex>
      </Flex>
      {reviews.items.map((review) => (
        <SingleReview {...MapSingleReview(review)} key={review.id} />
      ))}
    </VStack>
  );
};

type Props = {
  reviews: V1ReviewDtoV1PageDto;
};
