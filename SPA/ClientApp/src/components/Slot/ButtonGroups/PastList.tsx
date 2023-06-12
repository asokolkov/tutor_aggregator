import * as React from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import NewReviewModal from '../../../pages/TutorCard/modal/NewReviewModal';

export const PastList: React.FC = () => {
  const disclosure = useDisclosure();
  return (
    <>
      <NewReviewModal disclosure={disclosure} />
      <Box p="8px" w="100%">
        <Button rightIcon={<StarIcon />} w="100%" h="30px" variant="green">
          Оставить отзыв
        </Button>
      </Box>
    </>
  );
};
