import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { StarIcon } from '@chakra-ui/icons';

export const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <HStack spacing="5">
      <HStack spacing="5px">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star isActive={i < Math.round(rating)} key={i} />
          ))}
      </HStack>
      <Text>{rating.toFixed(1)}</Text>
    </HStack>
  );
};

const Star: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <Icon as={StarIcon} color={isActive ? '#FDCC0D' : undefined} />
);

type RatingStarsProps = {
  rating: number;
};
