import * as React from 'react';
import {
  Avatar,
  Box,
  Flex,
  useBreakpointValue,
  Button,
  Tooltip,
  Divider,
} from '@chakra-ui/react';
import { LockIcon, InfoIcon } from '@chakra-ui/icons';
import { ProfilePageSelectOptionsRow } from './ProfilePageSelectOptionsRow';
import { ProfilePageInputRow } from './ProfilePageInputRow';
import { ProfilePageTextAreaRow } from './ProfilePageTextAreaRow';
import { ProfilePageButtonRow } from './ProfilePageButtonRow';
import { ProfilePageCheckboxesRow } from './ProfilePageCheckboxesRow';
import profileIcon from '../../img/profile_icon_bg.png';

export const TutorCard = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box
        width={'100%'}
        shadow={'md'}
        borderRadius={'5px'}
        borderWidth={'1px'}
        bg="#A0AEC0"
        backgroundImage={isDesktop && profileIcon}
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
            <ProfilePageSelectOptionsRow
              label={'Район'}
              placeholder={'Уралмаш'}
              isDisabled={false}
              isRequired={true}
              options={['Академический', 'Ленинский']}
              tooltip={[
                <Tooltip
                  label="Выберите район для репетиторства"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <Divider color={'gray'} margin={'0 0 10px 0'} />
            <ProfilePageInputRow
              label={'Образование'}
              placeholder={'УрФУ Матмех'}
              isDisabled={false}
              isRequired={false}
              tooltip={[
                <Tooltip
                  label="Кратко напишите о вашем образовании"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageInputRow
              label={'Работа'}
              placeholder={'СКБ Контур'}
              isDisabled={false}
              isRequired={false}
              tooltip={[
                <Tooltip
                  label="Кратко напишите о том, кем вы работаете или работали вне репетиторства"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageTextAreaRow
              label={'Награды'}
              placeholder={
                // eslint-disable-next-line max-len
                'Сертификат о прохождении курса по бэкенду от ТЮМГУ (2018)\nЛауреат «Работник службы поддержки года», г. Тюмень (2022)'
              }
              isDisabled={false}
              tooltip={[
                <Tooltip
                  label="Укажите дипломы, сертификаты и премии для вашего профиля. Каждая награда — на новой строке"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <Divider color={'gray'} margin={'0 0 10px 0'} />
            <ProfilePageCheckboxesRow
              label={'Предметы'}
              isRequired={true}
              options={[
                'Математика',
                'Программирование',
                'Русский язык',
                'Дискретная математика',
              ]}
              checkedOptions={['Программирование', 'Русский язык']}
              tooltip={[
                <Tooltip
                  label="Выберите предметы, по которым вы будете репетиторствовать"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageInputRow
              label={'Требования'}
              placeholder={
                'Базовые школьные знания, усидчивость, время на домашнюю работу'
              }
              isDisabled={false}
              isRequired={false}
              tooltip={[
                <Tooltip
                  label="Кратко напишите о знаниях и качествах учеников, с которыми вы работаете"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <ProfilePageInputRow
              label={'Контакты'}
              placeholder={'По телефону: +7999565815. В Телеграме @theoilside'}
              isDisabled={false}
              isRequired={true}
              tooltip={[
                <Tooltip
                  label="Укажите контакты, по которым с вами будут связываться ученики"
                  placement={'left-start'}
                >
                  <InfoIcon margin={'0 0 0 10px'} />
                </Tooltip>,
              ]}
            />
            <Divider color={'gray'} margin={'0 0 10px 0'} />
            <ProfilePageTextAreaRow
              label={'О себе'}
              placeholder={
                'Всегда любил объяснять сложные вещи простыми словами.' +
                'Пробую себя в репетиторстве. У меня дома есть котик'
              }
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
