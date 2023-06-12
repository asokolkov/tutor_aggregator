import * as React from 'react';
import { useContext } from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
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
import { AvatarSection } from './components/AvatarSection';
import { TutorInitValues, useTutorForm } from './hooks/useForm';
import { TutorWarning } from './components/TutorWarning';

export const TutorCard: React.FC = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );
  const { tutor, locations, subjects } = useContext(ProfileContext);
  const { updateTutor, mapTutor } = useTutorForm(tutor);

  const onSubmit = async (values: TutorInitValues) => {
    const newTutor = updateTutor(values);
    await TutorsAPI.putCurrentProfileValues(newTutor);
  };

  return (
    <Flex
      direction={isLargerThanTablet ? 'row' : 'column'}
      align={'center'}
      margin={'0 -5vw 0 -5vw'}
      bg={isLargerThanTablet ? 'custom.blue.100' : 'white'}
      width={'calc(100% + 10vw)'}
      backgroundImage={isLargerThanTablet ? profileIcon : NaN}
      backgroundPosition={'right bottom'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'14em'}
    >
      <Formik initialValues={mapTutor()} onSubmit={onSubmit}>
        <Form
          style={{
            display: 'flex',
            flexDirection: isLargerThanTablet ? 'row' : 'column',
            width: isLargerThanTablet ? 'auto' : '100%',
          }}
        >
          <Box
            bg={isLargerThanTablet ? 'custom.blue.200' : 'custom.blue.100'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={isLargerThanTablet ? 'flex-end' : 'center'}
            padding={
              isLargerThanTablet ? '20px 10px 20px 5vw' : '20px 10px 0 10px'
            }
          >
            <Heading
              variant={'brand.h1'}
              color={isLargerThanTablet ? 'white' : 'custom.blue.300'}
              marginBottom={'15px'}
            >
              О себе
            </Heading>
            <AvatarSection />
          </Box>
          <Flex
            width={isLargerThanTablet ? '750px' : '90vw'}
            align={'left'}
            direction={'column'}
            gap={'10px'}
            margin={
              isLargerThanTablet ? '20px 5vw 20px 30px' : '20px 5vw 20px 5vw'
            }
          >
            <TutorWarning />
            <InputRow
              label={'Имя и фамилия'}
              isDisabled
              isRequired
              name={'name'}
              tooltip={{
                label: 'Чтобы изменить имя и фамилию, напиши в поддержку сайта',
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
              label={'Район для офлайн-занятий'}
              options={locations.map((x) => x.district)}
              name={'district'}
              placeholder={'Любой'}
              tooltip={{
                label: 'Выбери район для репетиторства',
                type: TooltipType.Info,
              }}
            />
            <SelectOptionsRow
              label={'Предмет'}
              options={subjects.map((x) => x.description)}
              name={'subject'}
              placeholder={'Любой'}
              tooltip={{
                label: 'Выбери предмет, по которым ты будешь репетиторствовать',
                type: TooltipType.Info,
              }}
            />
            <Divider
              color={'custom.blue.100'}
              borderWidth={'1px'}
              margin={'10px 0 10px 0'}
            />
            <InputRow
              label={'Образование'}
              placeholder={'Прошел курсы от Skillbox'}
              name={'education'}
              tooltip={{
                label: 'Кратко напиши о твоем образовании',
                type: TooltipType.Info,
              }}
            />
            <InputRow
              label={'Работа'}
              placeholder={'Младший дизайнер в Контуре'}
              name={'job'}
              tooltip={{
                label:
                  'Кратко напиши о том, кем ты работаешь или работал вне репетиторства',
                type: TooltipType.Info,
              }}
            />
            <InputRow
              label={'Требования к ученикам'}
              name={'requirements'}
              placeholder={
                'Базовые школьные знания, усидчивость, время на домашнюю работу'
              }
              tooltip={{
                label:
                  'Кратко напиши о знаниях и качествах учеников, с которыми ты работаешь',
                type: TooltipType.Info,
              }}
            />
            <Divider
              color={'custom.blue.100'}
              borderWidth={'1px'}
              margin={'10px 0 10px 0'}
            />
            <InputRow
              label={'Телефон для учеников'}
              placeholder={'+79995654815'}
              name={'phone'}
              tooltip={{
                label:
                  'Укажи номер телефона, по которому с тобой смогут связаться ученики',
                type: TooltipType.Info,
              }}
            />
            <InputRow
              label={'Почта для учеников'}
              placeholder={'writeme@gmail.com'}
              name={'email'}
              tooltip={{
                label:
                  'Укажи почту, по которой с тобой смогут связаться ученики',
                type: TooltipType.Info,
              }}
            />
            <InputRow
              label={'Telegram для учеников'}
              placeholder={'@durov'}
              name={'telegram'}
              tooltip={{
                label:
                  'Укажи никнейм в Телеграме, по которому с тобой смогут связаться ученики',
                type: TooltipType.Info,
              }}
            />
            <Divider
              color={'custom.blue.100'}
              borderWidth={'1px'}
              margin={'10px 0 10px 0'}
            />
            <TextAreaRow
              label={'О себе'}
              name={'about'}
              placeholder={
                'Всегда любил объяснять сложные вещи простыми словами.' +
                'Пробую себя в репетиторстве. У меня дома есть котик'
              }
              tooltip={{
                label:
                  'Напиши небольшое описание, которое будет отображаться в твоем публичном профиле',
                type: TooltipType.Info,
              }}
            />
            <SubmitButton buttonText={'Сохранить'} />
          </Flex>
        </Form>
      </Formik>
    </Flex>
  );
};
