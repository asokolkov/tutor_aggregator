import React, { useContext } from 'react';
import { Flex, Skeleton, Text, useMediaQuery } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { CardInfoContext } from '../pages/TutorCard/contexts/CardInfoContext';

const InfoWithIcon: React.FC<SearchCardInfoRowProps> = ({
  Icon,
  text,
  categoryText,
}) => {
  const isWithCategoryText = categoryText.length > 0;
  const [isLargerThanMobile] = useMediaQuery('(min-width: 468px)');
  const cardContext = useContext(CardInfoContext);
  return (
    <Flex
      flexDirection={isLargerThanMobile ? 'row' : 'column'}
      gap={isLargerThanMobile ? '8px' : '2px'}
      align={isLargerThanMobile ? 'center' : 'stretch'}
      width={'100%'}
    >
      <Flex flexShrink="0" gap="8px">
        <Icon size={24} />
        {isWithCategoryText && (
          <Text variant="regular.bold" width="130px" whiteSpace="nowrap">
            {categoryText}
          </Text>
        )}
      </Flex>
      <Skeleton isLoaded={!cardContext?.isLoading} w="100%">
        <Text>{text || 'Не указано'}</Text>
      </Skeleton>
    </Flex>
  );
};

export default InfoWithIcon;

interface SearchCardInfoRowProps {
  Icon: IconType;
  categoryText: string;
  text: string;
}
