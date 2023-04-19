import React from 'react';
import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

const BottomCardDescription: React.FC<BottomCardDescriptionProps> = ({
  icon,
  text,
  categoryText,
}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  let isWithCategoryText = categoryText.length > 0;
  return (
    <Flex margin={'0 0 8px 0'}>
      <Flex margin={'0 0 0 0'} width={isDesktop ? 'calc(168px - 1em)' : 'auto'}>
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

export default BottomCardDescription;

interface BottomCardDescriptionProps {
  icon: string;
  categoryText: string;
  text: string;
}
