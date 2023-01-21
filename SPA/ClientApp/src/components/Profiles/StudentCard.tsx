import * as React from 'react';
import {
  Avatar,
  Box,
  Flex,
  useBreakpointValue,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { LockIcon, InfoIcon } from '@chakra-ui/icons';
import { ProfilePageSelectOptionsRow } from './ProfilePageSelectOptionsRow';
import { ProfilePageInputRow } from './ProfilePageInputRow';
import { ProfilePageTextAreaRow } from './ProfilePageTextAreaRow';
import { ProfilePageButtonRow } from './ProfilePageButtonRow';
import profileIcon from '../../img/profile_icon_bg.png';

export const StudentCard = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box
        width={'100%'}
        shadow={'md'}
        borderRadius={'5px'}
        borderWidth={'1px'}
        bg="#A0AEC0"
        backgroundImage={isDesktop ? profileIcon : NaN}
        backgroundPosition={'right bottom'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'14em'}
      >
        <Flex
          padding={isDesktop ? '1.5em 5em 1.5em 3em' : '1em 1em 1em 1em'}
          direction={isDesktop ? 'row' : 'column'}
        >
          <Flex direction={'column'} align={'center'}>
            <Avatar
              w={'10em'}
              h={'10em'}
              margin={'0 0 10px 0'}
              colorScheme={'blue'}
              showBorder={true}
            ></Avatar>
            <Button
              size={'xs'}
              colorScheme={'blue'}
              margin={isDesktop ? '0 0 0 0' : '0 0 1.5em 0'}
            >
              Изменить фото
            </Button>
          </Flex>
          <Flex
            width={'100%'}
            align={'left'}
            direction={'column'}
            margin={isDesktop ? '0 0 0 3em' : '0 0 0 0'}
          >
            <ProfilePageInputRow
              label={'ФИО'}
              placeholder={'Михаил Ланец'}
              isDisabled={true}
              isRequired={true}
              tooltip={[
                <Tooltip
                  label="Чтобы изменить ФИО, напишите в поддержку сайта"
                  placement={'left-start'}
                >
                  <LockIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageSelectOptionsRow
              label={'Город'}
              placeholder={'Екатеринбург'}
              isDisabled={true}
              isRequired={true}
              options={['']}
              tooltip={[
                <Tooltip
                  label="Мы пока работаем только в одном городе"
                  placement={'left-start'}
                >
                  <LockIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageTextAreaRow
              label={'О себе'}
              placeholder={'Увлекаюсь горными лыжами и версткой сайтов'}
              isDisabled={false}
              tooltip={[
                <Tooltip
                  label="Напишите небольшое описание, которое будет отображаться на вашей карточке"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageButtonRow
              buttonText={'Сохранить'}
              isDisabled={false}
              width={'240px'}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
