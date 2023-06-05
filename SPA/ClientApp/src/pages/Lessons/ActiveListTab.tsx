import * as React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';

export const ActiveListTab: React.FC = () => {
  return (
    <Flex>
      <NearLessons />
      <Divider orientation="vertical" />
      <AllLessons />
    </Flex>
  );
};

export const NearLessons: React.FC = () => {
  return (
    <Flex gap="20px">
      <Text variant="regular.h2"></Text>
      {/*<Slot {...MapSlot()} variant={SlotVariant.activeList}></Slot>*/}
    </Flex>
  );
};

export const AllLessons: React.FC = () => {
  return <></>;
};
