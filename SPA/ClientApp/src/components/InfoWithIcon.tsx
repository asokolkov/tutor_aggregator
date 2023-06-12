import React from 'react';
import { Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { IconType } from 'react-icons';

const InfoWithIcon: React.FC<SearchCardInfoRowProps> = ({
  Icon,
  text,
  categoryText,
  link,
}) => {
  const isWithCategoryText = categoryText.length > 0;
  const [isLargerThanMobile] = useMediaQuery('(min-width: 468px)');
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
      {link && text ? (
        <Link href={link} isExternal target="_top">
          <Text>{text}</Text>
        </Link>
      ) : (
        <Text>{text || 'Не указано'}</Text>
      )}
    </Flex>
  );
};

export default InfoWithIcon;

interface SearchCardInfoRowProps {
  Icon: IconType;
  categoryText: string;
  text: string;
  link?: string;
}
