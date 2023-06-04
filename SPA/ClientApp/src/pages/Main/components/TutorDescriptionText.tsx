import * as React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Color } from '../../../assets/theme/themeEnum';

export const TutorDescriptionText: React.FC<Props> = ({
  text,
  title,
  isDesktop,
}) => {
  return (
    <VStack align={isDesktop ? 'flex-end' : 'center'}>
      <Text
        variant="brand.h1"
        color={Color.blue300}
        align={isDesktop ? 'right' : 'center'}
      >
        {title}
      </Text>
      <Text color={Color.blue300} align={isDesktop ? 'right' : 'center'}>
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
