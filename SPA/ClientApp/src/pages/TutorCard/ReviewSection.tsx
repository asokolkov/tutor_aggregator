import { SingleReview } from './components/SingleReview';
import {
  Flex,
  Text,
  useDisclosure,
  VStack,
  IconButton,
  useBreakpointValue,
  Skeleton,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MapSingleReview } from './_mapper';
import NewReviewModal from './modal/NewReviewModal';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto, V1ReviewDtoV1PageDto } from '../../api/models';
import { AddIcon } from '@chakra-ui/icons';
import { SingleReviewSkeleton } from './components/SingleReview.skeleton';

export const ReviewSection: React.FC<Props> = ({ reviews, isLoading }) => {
  const { user, isAuthorized } = useContext(UserContext);
  const disclosure = useDisclosure();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <VStack w="100%" spacing="20px" align="start" margin={'40px 0 0 0'}>
      <Flex
        gap={isLargerThanTablet ? '30px' : '0'}
        alignItems={'center'}
        w="100%"
        justify={isLargerThanTablet ? 'flex-start' : 'space-between'}
      >
        <Flex direction={'column'}>
          <Text variant="brand.h1">Отзывы</Text>
          <Skeleton isLoaded={!isLoading}>
            <Text variant="regular.bold">
              Всего отзывов: {reviews?.items.length}
            </Text>
          </Skeleton>
        </Flex>

        {!isLoading &&
          isAuthorized &&
          user.accountType === V1AccountTypeDto.student && (
            <>
              <IconButton
                variant="green"
                aria-label="Добавить отзыв"
                size="sm"
                icon={<AddIcon />}
                onClick={disclosure.onOpen}
              />
              <NewReviewModal disclosure={disclosure} />
            </>
          )}
      </Flex>

      {isLoading
        ? Array(3).fill(<SingleReviewSkeleton />)
        : reviews.items.map((review) => (
            <SingleReview {...MapSingleReview(review)} key={review.id} />
          ))}
    </VStack>
  );
};

type Props = {
  reviews: V1ReviewDtoV1PageDto;
  isLoading: boolean;
};
