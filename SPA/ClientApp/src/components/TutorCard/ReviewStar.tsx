import { HStack, Image } from '@chakra-ui/react';
import starIcon from '../../img/star.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ReviewStar = ({}: ReviewStarProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Image src={starIcon} alt={'star'} />);
  }
  return <HStack spacing="8px">{stars}</HStack>;
};

type ReviewStarProps = {
  starCount: number;
};
