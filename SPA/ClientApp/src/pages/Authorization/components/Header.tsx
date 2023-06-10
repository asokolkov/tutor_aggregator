import * as React from 'react';
import { Heading, Stack } from '@chakra-ui/react';

type Props = {
  title: string;
};
export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Stack textAlign="center">
      <Heading variant={'brand.h1'} color={'custom.blue.300'}>
        {title}
      </Heading>
    </Stack>
  );
};
