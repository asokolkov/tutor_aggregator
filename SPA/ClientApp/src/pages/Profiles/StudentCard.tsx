import * as React from 'react';
import { useContext } from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import profileIcon from '../../assets/images/profile_icon_bg.png';
import { InputRow } from './components/InputRow';
import { ProfileContext } from './contexts/ProfileContext';
import { Form, Formik } from 'formik';
import { TooltipType } from './components/_shared';
import { SelectOptionsRow } from './components/SelectOptionsRow';
import { AvatarSection } from './components/AvatarSection';
import { useStudentForm } from './hooks/useForm';

export const StudentCard: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { student } = useContext(ProfileContext);
  const { mapStudent } = useStudentForm(student);

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
      <Formik initialValues={mapStudent()} onSubmit={() => {}}>
        <Form>
          <Flex
            padding={isDesktop ? '1.5em 5em 1.5em 3em' : '1em 1em 1em 1em'}
            direction={isDesktop ? 'row' : 'column'}
          >
            <AvatarSection />
            <Flex
              width={'100%'}
              align={'left'}
              direction={'column'}
              margin={isDesktop ? '0 0 0 3em' : '0 0 0 0'}
              gap="10px"
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
            </Flex>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
};
