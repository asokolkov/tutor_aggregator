import * as React from 'react';
import { Button, useDisclosure, VStack } from '@chakra-ui/react';
import { Title } from './Title';
import { Slot } from '../../../../components/Slot/Slot';
import { AddIcon } from '@chakra-ui/icons';
import { NewSlotModal } from '../../modals/NewSlotModal';
import { MapSlot } from '../../../../components/Slot/_maper';
import { ButtonVariant } from '../../../../assets/theme/themeEnum';
import { V1LessonDto } from '../../../../api/models';

type Props = {
  lessons: V1LessonDto[];
  date: Date;
};
export const DayColumnWithSlots: React.FC<Props> = ({ lessons, date }) => {
  if (!lessons) lessons = [];
  const bookedCount = lessons.filter((x) => x.student).length;
  const sortedLessons = lessons.sort((x) => new Date(x.start).getTime());
  const disclosure = useDisclosure();

  return (
    <>
      <VStack
        w="356px"
        spacing="30px"
        style={{ breakInside: 'avoid' }}
        minH="50vh"
      >
        <Title
          date={date}
          totalCount={lessons.length}
          bookedCount={bookedCount}
        />
        <VStack spacing="16px" w="100%">
          {sortedLessons.map((lesson) => (
            <Slot {...MapSlot(lesson, true)} key={lesson.id} />
          ))}
          <Button
            rightIcon={<AddIcon />}
            variant={ButtonVariant.green}
            w="100%"
            onClick={disclosure.onOpen}
          >
            Добавить новый слот
          </Button>
        </VStack>
      </VStack>
      <NewSlotModal disclosure={disclosure} date={date} />
    </>
  );
};
