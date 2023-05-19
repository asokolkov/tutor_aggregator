import * as React from 'react';
import {
  VStack,
  Text,
  TabPanel,
  TabPanels,
  Tab,
  Tabs,
  TabList,
  HStack,
  Button,
} from '@chakra-ui/react';
import searchIcon from '../../../assets/images/search_icon_bg_new.png';
import { SelectOptions } from './SelectOptions';
// import { useContext } from 'react';
// import { SearchParamsContext } from '../../../contexts/SearchParamsContext';

export const MainSearchBox: React.FC = () => {
  // const { subjectsData, locationsData, isRefetching } =
  //   useContext(SearchParamsContext);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  // const REMOVE_removeDuplicates = (array: string[]) => {
  //   return array.filter((item, pos, self) => self.indexOf(item) == pos);
  // };

  return (
    <VStack
      margin={'0 -5vw 0 -5vw'}
      padding={'16px'}
      bg="custom.blue.100"
      width={'calc(100% + 10vw)'}
      spacing={'20px'}
      backgroundImage={searchIcon}
      backgroundPosition={'right bottom'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'14em'}
    >
      <Text variant={'brand.h1'} color={'custom.blue.300'}>
        Найдем репетиторов под твои цели
      </Text>
      <Tabs
        variant={'soft-rounded'}
        size={'sm'}
        colorScheme="gray"
        width={'100%'}
      >
        <TabList justifyContent={'center'}>
          <Tab>Офлайн занятия</Tab>
          <Tab>Онлайн занятия</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding={'10px 20% 6px 20%'}>
            <HStack justify={'center'} width={'100%'} align={'flex-end'}>
              <SelectOptions
                label={'Предмет'}
                // options={REMOVE_removeDuplicates(
                //   subjectsData.map((subject) => subject.description)
                // )}
                name="subject"
                placeholder="Любой"
              />
              <SelectOptions
                label={'Район'}
                // options={REMOVE_removeDuplicates(
                //   locationsData.map((location) => location.district)
                // )}
                name="district"
                placeholder="Любой"
              />
              <Button
                variant="green"
                minWidth={'160px'}
                type="submit"
                // isLoading={isRefetching}
              >
                Найти
              </Button>
            </HStack>
          </TabPanel>
          <TabPanel padding={'10px 20% 6px 20%'}>
            <HStack justify={'center'} width={'100%'} align={'flex-end'}>
              <SelectOptions
                label={'Предмет'}
                // options={REMOVE_removeDuplicates(
                //   subjectsData.map((subject) => subject.description)
                // )}
                name="subject"
                placeholder="Любой"
              />
              <Button
                variant="green"
                minWidth={'160px'}
                type="submit"
                // isLoading={isRefetching}
              >
                Найти
              </Button>
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
