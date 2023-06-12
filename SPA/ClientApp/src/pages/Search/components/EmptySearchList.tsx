import { Flex, Text } from '@chakra-ui/react';
export const EmptySearchList = () => {
  return (
    <Flex width={'100%'} align={'center'} direction={'column'} gap={'10px'}>
      <Text color={'custom.blue.200'} variant={'regular.bold'} align={'center'}>
        Ничего не найдено :(
      </Text>
      <Text color={'custom.blue.200'} align={'center'}>
        Попробуйте выбрать другие критерии или&nbsp;фильтры
      </Text>
    </Flex>
  );
};
