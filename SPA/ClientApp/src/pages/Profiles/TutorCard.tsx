import * as React from 'react';
import { useContext } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SelectOptionsRow } from './components/SelectOptionsRow';
import { InputRow } from './components/InputRow';
import { TextAreaRow } from './components/TextAreaRow';
import { SubmitButton } from './components/SubmitButton';
import profileIcon from '../../assets/images/profile_icon_bg.png';
import { ProfileContext } from './contexts/ProfileContext';
import { Form, Formik } from 'formik';
import TutorsAPI from '../../api/tutors';
import { TooltipType } from './components/_shared';
import { TutorInitValues, useTutorForm } from './hooks/useForm';
import { TutorWarning } from './components/TutorWarning';

export const TutorCard: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { tutor, locations, subjects } = useContext(ProfileContext);
  const { updateTutor, mapTutor } = useTutorForm(tutor);

  const onSubmit = async (values: TutorInitValues) => {
    const newTutor = updateTutor(values);
    await TutorsAPI.putCurrentProfileValues(newTutor);
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
      <Formik initialValues={mapTutor()} onSubmit={onSubmit}>
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
              gap="10px"
            >
              <TutorWarning />
              <InputRow
                label={'ФИО'}
                isDisabled
                isRequired
                name={'name'}
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
              <SelectOptionsRow
                label={'Район'}
                options={locations.map((x) => x.district)}
                name={'district'}
                placeholder={'Любой'}
                tooltip={{
                  label: 'Выберите район для репетиторства',
                  type: TooltipType.Info,
                }}
              />
              <SelectOptionsRow
                label={'Предметы'}
                options={subjects.map((x) => x.description)}
                name={'subject'}
                placeholder={'Любой'}
                tooltip={{
                  label:
                    'Выберите предметы, по которым вы будете репетиторствовать',
                  type: TooltipType.Info,
                }}
              />
              <Divider color={'gray'} margin={'0 0 10px 0'} />
              <InputRow
                label={'Образование'}
                name={'education'}
                tooltip={{
                  label: 'Кратко напишите о вашем образовании',
                  type: TooltipType.Info,
                }}
              />
              <InputRow
                label={'Работа'}
                placeholder={'СКБ Контур'}
                name={'job'}
                tooltip={{
                  label:
                    'Кратко напишите о том, кем вы работаете или работали вне репетиторства',
                  type: TooltipType.Info,
                }}
              />
              <InputRow
                label={'Требования'}
                name={'requirements'}
                placeholder={
                  'Базовые школьные знания, усидчивость, время на домашнюю работу'
                }
                tooltip={{
                  label:
                    'Кратко напишите о знаниях и качествах учеников, с которыми вы работаете',
                  type: TooltipType.Info,
                }}
              />
              <Divider color={'gray'} margin={'0 0 10px 0'} />
              <InputRow
                label={'Телефон'}
                name={'phone'}
                tooltip={{
                  label:
                    'Укажите номер телефона, по которому с вами будут связываться ученики',
                  type: TooltipType.Info,
                }}
              />
              <InputRow
                label={'Почта'}
                name={'email'}
                tooltip={{
                  label: 'Укажите почту, по которой с вами можно связаться',
                  type: TooltipType.Info,
                }}
              />
              <InputRow
                label={'Telegram'}
                name={'telegram'}
                tooltip={{
                  label: 'Укажите id телегам, где вам могут написать ученики',
                  type: TooltipType.Info,
                }}
              />
              <Divider color={'gray'} margin={'0 0 10px 0'} />
              <TextAreaRow
                label={'О себе'}
                name={'about'}
                placeholder={
                  'Всегда любил объяснять сложные вещи простыми словами.' +
                  'Пробую себя в репетиторстве. У меня дома есть котик'
                }
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
