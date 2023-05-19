import * as React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Color } from '../../../assets/theme/themeEnum';

export const TutorDescriptionText: React.FC<Props> = ({ text, title }) => {
  return (
    <VStack align="flex-end">
      <Text variant="brand.h1" color={Color.blue300} align="right">
        {title}
      </Text>
      <Text color={Color.blue300} align="right">
        {text}
      </Text>
    </VStack>
  );
};

type Props = {
  title: string;
  text: string;
};
