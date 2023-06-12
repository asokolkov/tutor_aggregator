import * as React from 'react';
import { useContext } from 'react';
import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { SubmitButton } from './components/SubmitButton';
import profileIcon from '../../assets/images/profile_icon_bg.png';
import { InputRow } from './components/InputRow';
import { ProfileContext } from './contexts/ProfileContext';
import { Form, Formik } from 'formik';
import { TooltipType } from './components/_shared';
import { SelectOptionsRow } from './components/SelectOptionsRow';
import { AvatarSection } from './components/AvatarSection';
import { useStudentForm } from './hooks/useForm';

export const StudentCard: React.FC = () => {
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  const { student } = useContext(ProfileContext);
  const { mapStudent } = useStudentForm(student);

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
      <Formik initialValues={mapStudent()} onSubmit={() => {}}>
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
            <InputRow
              label={'Имя и фамилия'}
              name={'name'}
              isDisabled
              isRequired
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
            <SubmitButton buttonText={'Сохранить'} isDisabled={true} isLoading={false} />
          </Flex>
        </Form>
      </Formik>
    </Flex>
  );
};
