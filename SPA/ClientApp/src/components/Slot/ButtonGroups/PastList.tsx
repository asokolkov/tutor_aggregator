import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { ReviewModalContext } from '../../ReviewModal/contexts/ReviewModalContext';
import { SlotContext } from '../contexts/SlotContext';

export const PastList: React.FC = () => {
  const { tutorId } = useContext(SlotContext);
  const { setTutorId, disclosure } = useContext(ReviewModalContext);
  const onClick = () => {
    setTutorId(tutorId);
    disclosure.onOpen();
  };

  return (
    <Box p="8px" w="100%">
      <Button rightIcon={<StarIcon />} w="100%" h="30px" onClick={onClick}>
        Оставить отзыв
      </Button>
    </Box>
  );
};
