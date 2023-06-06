import React from 'react';
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { IconType } from 'react-icons';

const InfoWithIcon: React.FC<SearchCardInfoRowProps> = ({
  Icon,
  text,
  categoryText,
}) => {
  const isWithCategoryText = categoryText.length > 0;
  const [isLargerThanMobile] = useMediaQuery('(min-width: 468px)');
  return (
    <Flex flexDirection={isLargerThanMobile ? 'row' : 'column'} gap="8px">
      <Flex flexShrink="0" gap="8px">
        <Icon size={24} />
        {isWithCategoryText && (
          <Text variant="regular.bold" width="124px" whiteSpace="nowrap">
            {categoryText}
          </Text>
        )}
      </Flex>
      <Text>{text}</Text>
    </Flex>
  );
};

export default InfoWithIcon;

interface SearchCardInfoRowProps {
  Icon: IconType;
  categoryText: string;
  text: string;
}
