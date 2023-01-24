import * as React from 'react';
import { Box, Flex, useBreakpointValue, Heading } from '@chakra-ui/react';
import { LessonsBoxRow } from './LessonsBoxRow';
import { PROFILE_PAGE } from '../../route-paths';
export const ActiveStudentLessons = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      width={'100%'}
      shadow={'md'}
      borderRadius={'5px'}
      borderWidth={'1px'}
      bg="#A1C0A0"
    >
      <Flex
        padding={isDesktop ? '1.5em' : '1em'}
        direction={isDesktop ? 'row' : 'column'}
      >
        <Flex width={'100%'} align={'left'} direction={'column'}>
          <Heading size={'md'} margin={'0 0 1em 0'}>
            Записи к репетиторам
          </Heading>
          <LessonsBoxRow
            personName={'Павел Егоров'}
            datetime={new Date(2023, 0, 25, 12, 0).getTime()}
            isLink={true}
            linkTo={PROFILE_PAGE}
            isCancellable={true}
            isRatable={false}
          />
          <LessonsBoxRow
            personName={'Евгений Скворцов'}
            datetime={new Date(2023, 0, 26, 13, 30).getTime()}
            isLink={true}
            linkTo={PROFILE_PAGE}
            isCancellable={true}
            isRatable={false}
          />
          <LessonsBoxRow
            personName={'Юрий Окуловский'}
            datetime={new Date(2023, 0, 28, 15, 30).getTime()}
            isLink={true}
            linkTo={PROFILE_PAGE}
            isCancellable={true}
            isRatable={false}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
