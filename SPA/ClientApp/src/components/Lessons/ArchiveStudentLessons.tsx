import * as React from 'react';
import { Box, Flex, useBreakpointValue, Heading } from '@chakra-ui/react';
import { LessonsBoxRow } from './LessonsBoxRow';
import { PROFILE_PAGE } from '../../route-paths';
export const ArchiveStudentLessons = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      width={'100%'}
      shadow={'md'}
      borderRadius={'5px'}
      borderWidth={'1px'}
      bg="#C4C4C4"
    >
      <Flex
        padding={isDesktop ? '1.5em' : '1em'}
        direction={isDesktop ? 'row' : 'column'}
      >
        <Flex width={'100%'} align={'left'} direction={'column'} margin={'0'}>
          <Heading size={'md'} margin={'0 0 1em 0'}>
            Архивные записи
          </Heading>
          <LessonsBoxRow
            personName={'Арсений Шур'}
            datetime={Date.now()}
            isLink={true}
            linkTo={PROFILE_PAGE}
            isRatable={true}
            isCancellable={false}
          />
          <LessonsBoxRow
            personName={'Дмитрий Косолобов'}
            datetime={Date.now()}
            isLink={true}
            linkTo={PROFILE_PAGE}
            isRatable={true}
            isCancellable={false}
          />
          <LessonsBoxRow
            personName={'Леонид Волков'}
            datetime={Date.now()}
            isLink={true}
            linkTo={PROFILE_PAGE}
            isRatable={true}
            isCancellable={false}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
