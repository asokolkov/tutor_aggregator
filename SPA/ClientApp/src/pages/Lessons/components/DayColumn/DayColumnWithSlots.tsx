import * as React from 'react';
import { Lesson } from '../../../../api/lessons';
import { Button, VStack } from '@chakra-ui/react';
import { Title } from './Title';
import { Slot } from '../Slot/Slot';
import { AddIcon } from '@chakra-ui/icons';

type Props = {
  lessons: Lesson[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons }) => {
  return (
    <VStack w="420px" spacing="30px">
      <Title />
      <VStack spacing="16px" w="100%">
        {lessons?.map((lesson) => (
          <Slot lesson={lesson} />
        ))}
        <Button color="white" bg="green.400" rightIcon={<AddIcon />} w="100%">
          Добавить новый слот
        </Button>
      </VStack>
    </VStack>
  );
};
