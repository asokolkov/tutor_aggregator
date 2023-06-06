import React, { ReactNode } from 'react';
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const InfoWithIcon: React.FC<SearchCardInfoRowProps> = ({
  icon,
  text,
  categoryText,
}) => {
  const isWithCategoryText = categoryText.length > 0;
  const [isLargerThanMobile] = useMediaQuery('(min-width: 468px)');
  return (
    <Flex flexDirection={isLargerThanMobile ? 'row' : 'column'} gap="8px">
      <Flex flexShrink="0">
        {/*<Image src={icon} alt="" w="24px" h="24px" mr="6px" />*/}
        {icon}
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
  icon: ReactNode;
  categoryText: string;
  text: string;
}
