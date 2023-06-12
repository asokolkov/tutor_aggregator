import * as React from 'react';
import { useContext } from 'react';
import { VStack } from '@chakra-ui/react';
import { PriceAndTypeInfo } from './PriceAndTypeInfo';
import { Name } from './Name';
import { TutorCalendar } from './ButtonGroups/TutorCalendar';
import { SlotContext } from './contexts/SlotContext';
import { StudentCalendar } from './ButtonGroups/StudentCalendar';
import { BookedBy, SlotVariant } from './Slot';
import { ActiveList } from './ButtonGroups/ActiveList';
import { PastList } from './ButtonGroups/PastList';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import { V1AccountTypeDto } from '../../api/models';

const renderButtonSection = (variant: SlotVariant): React.FC => {
  const { user } = useContext(UserContext);
  if (variant === SlotVariant.tutorCalendar) return TutorCalendar;
  if (variant === SlotVariant.studentCalendar) return StudentCalendar;
  if (
    variant === SlotVariant.activeCloseList ||
    variant === SlotVariant.activeAllList
  )
    return ActiveList;
  if (
    variant === SlotVariant.pastList &&
    user.accountType === V1AccountTypeDto.student
  )
    return PastList;
};

export const SlotInfo: React.FC = () => {
  const { bookedBy, variant } = useContext(SlotContext);
  const ButtonSection = renderButtonSection(variant);
  const isNameVisible =
    bookedBy !== BookedBy.nobody && // booked by someone
    variant !== SlotVariant.studentCalendar;

  return (
    <VStack w="100%" spacing="0px">
      <PriceAndTypeInfo />
      {isNameVisible && <Name />}
      {ButtonSection && <ButtonSection />}
    </VStack>
  );
};
