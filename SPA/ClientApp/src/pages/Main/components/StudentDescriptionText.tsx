import * as React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Color } from '../../../assets/theme/themeEnum';

export const StudentDescriptionText: React.FC<Props> = ({ text, title }) => {
  return (
    <VStack align="flex-start">
      <Text variant="brand.h1" color={Color.blue300}>
        {title}
      </Text>
      <Text color={Color.blue300}>{text}</Text>
    </VStack>
  );
};

type Props = {
  title: string;
  text: string;
};
