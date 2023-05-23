import * as React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Color } from '../../../assets/theme/themeEnum';

export const StudentDescriptionText: React.FC<Props> = ({
  text,
  title,
  isDesktop,
}) => {
  return (
    <VStack align={isDesktop ? 'flex-start' : 'center'}>
      <Text variant="brand.h1" color={Color.blue300}>
        {title}
      </Text>
      <Text color={Color.blue300} align={isDesktop ? 'start' : 'center'}>
        {text}
      </Text>
    </VStack>
  );
};

type Props = {
  title: string;
  text: string;
  isDesktop: boolean;
};
