import React from 'react';
import { Award } from '../../../api/_share';
import { VStack, Text } from '@chakra-ui/react';

const AwardSection: React.FC<AwardSectionProps> = (props) => {
  return (
    <VStack align={'left'} width={'100%'}>
      <Text fontSize={'2xl'} as="b">
        Награды
      </Text>
      {props.awards.map((a) => (
        <Text key={a.id}>• {a.value}</Text>
      ))}
    </VStack>
  );
};

export default AwardSection;

export interface AwardSectionProps {
  awards: Award[];
}
