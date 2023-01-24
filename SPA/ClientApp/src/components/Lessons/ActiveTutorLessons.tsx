import * as React from 'react';
import { Box, Flex, useBreakpointValue, Heading } from '@chakra-ui/react';
import { LessonsBoxRow } from './LessonsBoxRow';
export const ActiveTutorLessons = () => {
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
            Записи ваших учеников
          </Heading>
          <LessonsBoxRow
            personName={'Михаил Ланец'}
            datetime={new Date(2023, 0, 25, 12, 0).getTime()}
            //datetime={Date.now()}
            isLink={false}
            isRatable={false}
            isCancellable={true}
          />
          <LessonsBoxRow
            personName={'Владислав Бикбулатов'}
            datetime={new Date(2023, 0, 26, 13, 0).getTime()}
            //datetime={Date.now()}
            isLink={false}
            isRatable={false}
            isCancellable={true}
          />
          <LessonsBoxRow
            personName={'Илья Жданов'}
            datetime={new Date(2023, 0, 26, 14, 30).getTime()}
            isLink={false}
            isRatable={false}
            isCancellable={true}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
