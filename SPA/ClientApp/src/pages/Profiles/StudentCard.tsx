import * as React from 'react';
import { ChangeEvent, useContext } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SubmitButton } from './components/SubmitButton';
import profileIcon from '../../assets/images/profile_icon_bg.png';
import { InputRow } from './components/InputRow';
import { ProfileContext } from './contexts/ProfileContext';
import { Form, Formik } from 'formik';
import StudentAPI from '../../api/students';
import { TooltipType } from './components/_shared';
import { SelectOptionsRow } from './components/SelectOptionsRow';
import { TextAreaRow } from './components/TextAreaRow';
import { FileUpload } from './components/FileUpload';
import AvatarAPI from '../../api/avatars';
import { StudentInitValues, useStudentForm } from './hooks/useForm';

export const StudentCard: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { student } = useContext(ProfileContext);
  const { updateStudent, mapStudent } = useStudentForm(student);

  const onSubmit = async (values: StudentInitValues) => {
    const newStudent = updateStudent(values);
    await StudentAPI.putCurrentProfileValues(newStudent);
  };

  const onAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const avatarFile = event.target.files[0];
    await AvatarAPI.uploadAvatar(avatarFile);
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
      <Formik initialValues={mapStudent()} onSubmit={onSubmit}>
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
                showBorder
              ></Avatar>
              <FileUpload accept="image/*" onChange={onAvatarChange}>
                <Button
                  size={'xs'}
                  colorScheme={'blue'}
                  margin={isDesktop ? '0 0 0 0' : '0 0 1.5em 0'}
                  justifyContent="center"
                >
                  Изменить фото
                </Button>
              </FileUpload>
            </Flex>
            <Flex
              width={'100%'}
              align={'left'}
              direction={'column'}
              margin={isDesktop ? '0 0 0 3em' : '0 0 0 0'}
            >
              <InputRow
                label={'ФИО'}
                name={'name'}
                isDisabled
                isRequired
                tooltip={{
                  label: 'Чтобы изменить ФИО, напишите в поддержку сайта',
                  type: TooltipType.Lock,
                }}
              />
              <SelectOptionsRow
                label={'Город'}
                isDisabled
                isRequired
                options={['Екатеринбург']}
                name={'city'}
                tooltip={{
                  label: 'Мы пока работаем только в одном городе',
                  type: TooltipType.Lock,
                }}
              />
              <InputRow
                label={'Возраст'}
                placeholder={'23'}
                name={'age'}
                tooltip={{ label: 'Укажите возраст', type: TooltipType.Info }}
              />
              <TextAreaRow
                label={'О себе'}
                placeholder={'Увлекаюсь горными лыжами и версткой сайтов'}
                name={'about'}
                tooltip={{
                  label:
                    'Напишите небольшое описание, которое будет отображаться на вашей карточке',
                  type: TooltipType.Info,
                }}
              />
              <SubmitButton buttonText={'Сохранить'} />
            </Flex>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
};
