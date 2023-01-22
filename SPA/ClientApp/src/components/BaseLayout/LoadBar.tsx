import * as React from 'react';
import { CircularProgress, VStack, Text } from '@chakra-ui/react';

interface Props {
  description?: string;
}
export const LoadBar: React.FC<Props> = ({ description }) => {
  return (
    <VStack style={{ margin: '30vh auto 0', transform: 'translateY(-50%)' }}>
      <CircularProgress
        isIndeterminate
        color="teal"
        size={'100px'}
        value={25}
        thickness="12px"
      />
      <Text>{description ? description : 'Выполнеяется загрузка'}</Text>
    </VStack>
  );
};
