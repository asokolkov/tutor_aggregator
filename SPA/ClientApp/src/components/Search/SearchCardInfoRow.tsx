import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const SearchCardInfoRow: React.FC<SearchCardInfoRowProps> = ({
  icon,
  text,
  categoryText,
}) => {
  let isWithCategoryText = categoryText.length > 0;
  return (
    <Flex margin={'0 0 8px 0'}>
      <Flex margin={'0 0 0 0'} width={'auto'}>
        <Image
          src={icon}
          alt={'icon'}
          w={'24px'}
          minWidth={'24px'}
          h={'24px'}
          minHeight={'24px'}
          margin={'0 6px 0 0'}
        />
        {isWithCategoryText && (
          <Text
            as={'b'}
            fontSize="m"
            width={'calc(168px - 6px - 24px - 1em)'}
            style={{ whiteSpace: 'nowrap' }}
          >
            {categoryText}
          </Text>
        )}
      </Flex>
      <Flex>
        <Text fontSize="m">{text}</Text>
      </Flex>
    </Flex>
  );
};

export default SearchCardInfoRow;

interface SearchCardInfoRowProps {
  icon: string;
  categoryText: string;
  text: string;
}
