import * as React from 'react';
import { Button, HStack, Text, useBreakpointValue } from '@chakra-ui/react';
import { getDayAndMonthFromDate } from '../../utils/datetime';
import { ButtonVariant } from '../../assets/theme/themeEnum';

type Props = {
  start: Date;
  end: Date;
  onDateChange: (isForward: boolean) => void;
  inCalendarPage?: boolean;
};
export const PaginationMenu: React.FC<Props> = ({
  start,
  end,
  onDateChange,
  inCalendarPage,
}) => {
  const isOneDay = start.getDate() === end.getDate();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <HStack
      width="100%"
      spacing="20px"
      justify={isLargerThanTablet && !inCalendarPage ? 'left' : 'center'}
      padding="20px 5vw 20px 30px"
    >
      <Button
        onClick={() => onDateChange(false)}
        variant={
          isLargerThanTablet && !inCalendarPage
            ? ButtonVariant.blue100
            : ButtonVariant.blue300
        }
      >
        {isOneDay ? '←' : '← Предыдущие дни'}
      </Button>
      <Text
        variant="regular.h3"
        align={'center'}
        color={
          isLargerThanTablet && !inCalendarPage ? 'white' : 'custom.blue.300'
        }
      >
        {isOneDay
          ? getDayAndMonthFromDate(start)
          : `${getDayAndMonthFromDate(start)} – ${getDayAndMonthFromDate(end)}`}
      </Text>
      <Button
        onClick={() => onDateChange(true)}
        variant={
          isLargerThanTablet && !inCalendarPage
            ? ButtonVariant.blue100
            : ButtonVariant.blue300
        }
      >
        {isOneDay ? '→' : 'Следующие дни →'}
      </Button>
    </HStack>
  );
};
