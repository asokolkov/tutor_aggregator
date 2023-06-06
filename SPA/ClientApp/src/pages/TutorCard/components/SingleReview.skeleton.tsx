import * as React from 'react';
import {
  SkeletonText,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { RatingStars } from '../../../components/ReviewStars/RatingStars';

export const SingleReviewSkeleton: React.FC = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <HStack
      w="100%"
      spacing={'16px'}
      align={'start'}
      borderWidth="2px"
      borderColor="blue.200"
      borderRadius="10px"
      p="16px"
    >
      <SkeletonCircle size={isLargerThanTablet ? '48px' : '32px'} />

      <VStack spacing={'16px'} align={'start'} w="100%">
        <Skeleton>
          <Stack
            spacing={isLargerThanTablet ? '16px' : '5px'}
            direction={isLargerThanTablet ? 'row' : 'column'}
          >
            <Text variant="regular.h3">fullName</Text>
            <RatingStars rating={5} />
            <Text variant="misc.field-title">date</Text>
          </Stack>
        </Skeleton>
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="4" w="100%" />
      </VStack>
    </HStack>
  );
};
