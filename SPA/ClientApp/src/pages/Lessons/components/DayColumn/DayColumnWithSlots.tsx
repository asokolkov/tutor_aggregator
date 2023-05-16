import * as React from 'react';
import { Lesson } from '../../../../api/lessons';
import { Button, useDisclosure, VStack } from '@chakra-ui/react';
import { Title } from './Title';
import { Slot } from '../../../sharedComponents/Slot/Slot';
import { AddIcon } from '@chakra-ui/icons';
import { AddNewSlotModal } from '../modals/AddNewSlotModal';
import { MapSlot } from '../../../sharedComponents/Slot/_maper';

type Props = {
  lessons: Lesson[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons, date }) => {
  if (!lessons) lessons = [];
  const bookedCount = lessons.filter((x) => x.student).length;
  const disclosure = useDisclosure();

  return (
    <>
      <VStack w="420px" spacing="30px" style={{ breakInside: 'avoid' }}>
        <Title
          date={date}
          totalCount={lessons.length}
          bookedCount={bookedCount}
        />
        <VStack spacing="16px" w="100%">
          {lessons.map((lesson) => (
            <Slot {...MapSlot(lesson, true)} key={lesson.id} />
          ))}
          <Button
            color="white"
            bg="green.400"
            rightIcon={<AddIcon />}
            w="100%"
            onClick={disclosure.onOpen}
          >
            Добавить новый слот
          </Button>
        </VStack>
      </VStack>
      <AddNewSlotModal disclosure={disclosure} date={date} />
    </>
  );
};
