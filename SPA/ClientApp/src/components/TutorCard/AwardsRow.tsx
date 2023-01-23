import React from 'react';
import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { Award } from '../../apis/_share';

const AwardsRow: React.FC<AwardsRowProps> = ({
  icon,
  awards,
  categoryText,
}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  let isWithCategoryText = categoryText.length > 0;
  return (
    <Flex margin={'0 0 8px 0'}>
      <Flex
        margin={'0 0.5em 0 0'}
        width={isDesktop ? 'calc(168px - 1em - 8px)' : 'auto'}
      >
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
      <Flex direction={'column'} width={'100%'}>
        {awards.map((a) => (
          <Text key={a.id}>
            • {a.description}, {a.year} г.
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default AwardsRow;

interface AwardsRowProps {
  icon: string;
  categoryText?: string;
  awards: Award[];
}
