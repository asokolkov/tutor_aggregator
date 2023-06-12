import { Flex, Text } from '@chakra-ui/react';
export const EmptyLessonList = () => {
  return (
    <Flex width={'100%'} align={'left'} direction={'column'} gap={'10px'}>
      <Text color={'custom.blue.200'} variant={'regular.bold'} align={'left'}>
        Пустой список :(
      </Text>
      <Text color={'custom.blue.200'} align={'left'}>
        Здесь будут появляться занятия
      </Text>
    </Flex>
  );
};
