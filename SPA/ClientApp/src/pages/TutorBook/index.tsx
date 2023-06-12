import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import {
  Text,
  useBreakpointValue,
  VStack,
  Flex,
  Box,
  Heading,
  Avatar,
  HStack,
} from '@chakra-ui/react';
import { UserContext } from '../../layouts/base/contexts/UserContext';
import {
  useLessonTab,
  useWindowDimensions,
} from '../../components/LessonTab/useLessonTab';
import { PaginationMenu } from '../../components/LessonTab/PaginationMenu';
import { getShiftedDate } from '../../utils/datetime';
import { LoadBar } from '../../components/LoadBar/LoadBar';
import { DayColumnWithSlots } from './components/DayColumnWithSlots';
import './styles.css';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { LOGIN_PAGE } from '../../routes/routePaths';
import { useTutorId } from '../../routes/params';
import { ModalContext } from '../../components/Slot/contexts/ModalContext';
import { useModal } from '../../components/Slot/hooks/useModal';
import { CancelLessonModal } from '../../components/Slot/modals/CancelLessonModal';
import { BookLessonModal } from '../../components/Slot/modals/BookLessonModal';
import { Color } from '../../assets/theme/themeEnum';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getTutorCardByIdPath } from '../../routes/routes';
import { useAvatarQuery } from '../../query/useAvatarQuery';

export const TutorBookPage: React.FC = () => {
  const { isAuthorized } = useContext(UserContext);
  const tutorId = useTutorId();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  if (!isAuthorized) {
    return <Navigate to={LOGIN_PAGE} />;
  }

  const [columnCount, setColumnCount] = useState(5);
  const dimensions = useWindowDimensions();

  const updateColumn = () => {
    const width = dimensions.width;

    if (width < 768) setColumnCount(1);
    else if (width < 1024) setColumnCount(2);
    else if (width < 1440) setColumnCount(3);
    else if (width < 1920) setColumnCount(4);
    else if (width < 2560) setColumnCount(5);
    else setColumnCount(6);
  };

  useEffect(() => {
    updateColumn();
  }, [dimensions]);

  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);

  const [todayStartTime, setTodayStartTime] = useState(currentDate);
  const changeDate = (isForward: boolean) => {
    setTodayStartTime((prevDate) => {
      const newDate = new Date(prevDate);
      const delta = isForward ? columnCount : -columnCount;
      newDate.setDate(prevDate.getDate() + delta);
      return newDate;
    });
  };

  const { queries } = useLessonTab(tutorId, columnCount, todayStartTime);
  const isLoading = queries.some((query) => query.isLoading);
  const { modalProviderValue } = useModal();
  const [search] = useSearchParams();
  const { avatar } = useAvatarQuery(useTutorId());

  return (
    <>
      <Link to={getTutorCardByIdPath(useTutorId())}>
        <Text variant="misc.link" color={Color.blue300} padding={'0 0 10px 0'}>
          <ArrowBackIcon />
          Вернуться к репетитору
        </Text>
      </Link>
      <Flex
        direction={isLargerThanTablet ? 'row' : 'column'}
        align={'center'}
        margin={'0 -5vw 0 -5vw'}
        bg={isLargerThanTablet ? 'custom.blue.200' : 'white'}
        width={'calc(100% + 10vw)'}
      >
        <Box
          bg={isLargerThanTablet ? 'custom.blue.100' : 'custom.blue.100'}
          height={'100%'}
          width={isLargerThanTablet ? '60vw' : '100%'}
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
          justifyContent={isLargerThanTablet ? 'left' : 'center'}
          padding={
            isLargerThanTablet ? '20px 20px 20px 5vw' : '20px 5vw 20px 5vw'
          }
        >
          <Heading
            variant={'brand.h1'}
            color={'custom.blue.300'}
            display={'flex'}
            textAlign={isLargerThanTablet ? 'left' : 'center'}
          >
            Записаться к&nbsp;репетитору
          </Heading>
          <HStack
            spacing={'10px'}
            width={isLargerThanTablet ? '100%' : 'auto'}
            align={'center'}
          >
            <Avatar name={search.get('name')} size={'md'} src={avatar} />
            <Text
              variant="regular.h2"
              textAlign={'left'}
              color={'custom.blue.300'}
            >
              {search.get('name')}
            </Text>
          </HStack>
        </Box>
        <PaginationMenu
          start={todayStartTime}
          end={getShiftedDate(todayStartTime, columnCount - 1)}
          onDateChange={changeDate}
        />
      </Flex>
      <VStack width={'100%'} marginTop={'20px'}>
        {isLoading ? (
          <LoadBar description={'Загружаем слоты'} />
        ) : (
          <ModalContext.Provider value={modalProviderValue}>
            <div
              className="tutor-book-container"
              style={{ columnRuleColor: 'blue.100', columnGap: '40px' }}
            >
              <CancelLessonModal disclosure={modalProviderValue.cancelDisc} />
              <BookLessonModal disclosure={modalProviderValue.bookDisc} />
              {queries.map((query, i) => {
                const date = getShiftedDate(todayStartTime, i);
                return (
                  <DayColumnWithSlots
                    lessons={query.data}
                    date={date}
                    key={date.toString()}
                  />
                );
              })}
            </div>
          </ModalContext.Provider>
        )}
      </VStack>
    </>
  );
};
