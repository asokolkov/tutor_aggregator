import { Flex, Image } from '@chakra-ui/react';
import starIcon from '../../img/star.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ReviewStar = ({}: ReviewStarProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Image src={starIcon} alt={'star'} key={i} w={'24px'} h={'24px'} />
    );
  }
  return (
    <Flex justify={'space-between'} minWidth={'130px'} width={'100%'}>
      {stars}
    </Flex>
  );
};

type ReviewStarProps = {
  starCount: number;
};
