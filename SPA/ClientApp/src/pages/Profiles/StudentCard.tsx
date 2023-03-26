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
import { ProfilePageTextAreaRow } from './components/ProfilePageTextAreaRow';
import { SubmitButton } from './components/SubmitButton';
import profileIcon from '../../assets/images/profile_icon_bg.png';
import { ProfilePageInputRow } from './components/ProfilePageInputRow';
import { ProfilePageSelectOptionsRow } from './components/ProfilePageSelectOptionsRow';
import { ProfileContext } from '../../contexts/ProfileContext';
import { useContext } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import {
  mapStudentToFormikValues,
  SexOptions,
  updateStudentFromFormikValues,
} from './FormHelper';
import StudentAPI from '../../api/students';

export const StudentCard: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const profileContext = useContext(ProfileContext);

  if (profileContext.isLoading) return <></>;
  const student = profileContext.studentProfile;

  const onSubmit = async (values: FormikValues) => {
    const newStudent = updateStudentFromFormikValues(student, values);
    await StudentAPI.putCurrentProfileValues(newStudent);
  };
  return (
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
      <Formik
        initialValues={mapStudentToFormikValues(student)}
        onSubmit={onSubmit}
      >
        <Form>
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
                name={'name'}
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
                isDisabled={true}
                isRequired={true}
                optionLabels={['Екатеринбург']}
                optionValues={['Екатеринбург']}
                name={'city'}
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
                label={'Пол'}
                isDisabled={false}
                isRequired={false}
                optionLabels={['Мужской', 'Женский', 'Другое']}
                optionValues={[
                  SexOptions.Male,
                  SexOptions.Female,
                  SexOptions.Other,
                ]}
                name={'sex'}
                tooltip={[
                  <Tooltip label="Укажите пол" placement={'left-start'}>
                    <InfoIcon margin={'0 0 0 10px'} />
                  </Tooltip>,
                ]}
              />
              <ProfilePageInputRow
                label={'Возраст'}
                placeholder={'23'}
                isDisabled={false}
                isRequired={false}
                name={'age'}
                tooltip={[
                  <Tooltip label="Укажите возраст" placement={'left-start'}>
                    <InfoIcon margin={'0 0 0 10px'} />
                  </Tooltip>,
                ]}
              />
              <ProfilePageTextAreaRow
                label={'О себе'}
                placeholder={'Увлекаюсь горными лыжами и версткой сайтов'}
                isDisabled={false}
                name={'about'}
                tooltip={[
                  <Tooltip
                    label="Напишите небольшое описание, которое будет отображаться на вашей карточке"
                    placement={'left-start'}
                  >
                    <InfoIcon margin={'0 0 0 10px'} />
                  </Tooltip>,
                ]}
              />
              <SubmitButton buttonText={'Сохранить'} isDisabled={false} />
            </Flex>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
};
