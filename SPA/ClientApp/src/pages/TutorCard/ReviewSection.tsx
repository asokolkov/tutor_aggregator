import { SingleReview } from './components/SingleReview';
import {
  Flex,
  Text,
  useDisclosure,
  VStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MapSingleReview } from './_mapper';
import NewReviewModal from './modal/NewReviewModal';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto, V1ReviewDtoV1PageDto } from '../../api/models';
import { AddIcon } from '@chakra-ui/icons';

export const ReviewSection: React.FC<Props> = ({ reviews }) => {
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
          <Text variant="regular.bold">
            Всего отзывов: {reviews.items.length}
          </Text>
        </Flex>

        {isAuthorized && user.accountType === V1AccountTypeDto.student && (
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
      {reviews.items.map((review) => (
        <SingleReview {...MapSingleReview(review)} key={review.id} />
      ))}
    </VStack>
  );
};

type Props = {
  reviews: V1ReviewDtoV1PageDto;
};
