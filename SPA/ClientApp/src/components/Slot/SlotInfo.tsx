import * as React from 'react';
import { useContext } from 'react';
import { VStack } from '@chakra-ui/react';
import { PriceAndTypeInfo } from './PriceAndTypeInfo';
import { Name } from './Name';
import { TutorCalendar } from './ButtonGroups/TutorCalendar';
import { SlotContext } from './contexts/SlotContext';
import { StudentCalendar } from './ButtonGroups/StudentCalendar';
import { SlotVariant } from './Slot';
import { ActiveList } from './ButtonGroups/ActiveList';
import { PastList } from './ButtonGroups/PastList';

const renderButtonSection = (variant: SlotVariant): React.FC => {
  switch (variant) {
    case SlotVariant.tutorCalendar:
      return TutorCalendar;
    case SlotVariant.studentCalendar:
      return StudentCalendar;
    case SlotVariant.activeCloseList:
      return ActiveList;
    case SlotVariant.activeAllList:
      return ActiveList;
    case SlotVariant.pastList:
      return PastList;
    default:
      return undefined;
  }
};

export const SlotInfo: React.FC = () => {
  const { isBooked, variant } = useContext(SlotContext);
  const ButtonSection = renderButtonSection(variant);
  const isNameVisible =
    !(
      variant === SlotVariant.tutorCalendar ||
      variant === SlotVariant.studentCalendar
    ) || isBooked;

  return (
    <VStack w="100%" spacing="0px">
      <PriceAndTypeInfo />
      {isNameVisible && <Name />}
      {ButtonSection && <ButtonSection />}
    </VStack>
  );
};
