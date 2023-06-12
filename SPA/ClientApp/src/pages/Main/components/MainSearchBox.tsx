import * as React from 'react';
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import searchIcon from '../../../assets/images/search_icon_bg.png';
import { FormBody } from './FormBody';
import { Form, Formik } from 'formik';
import { useFormikValues } from '../hooks/useFormikValues';
import { useSubmitButton } from '../hooks/useSubmitButton';

export const MainSearchBox: React.FC = () => {
  const { initValues } = useFormikValues();
  const { onSubmit } = useSubmitButton();
  const isLargerThanTablet = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false, fallback: 'lg' }
  );

  return (
    <Flex
      direction={'column'}
      align={'center'}
      margin={'0 -5vw 0 -5vw'}
      padding={isLargerThanTablet ? '32px' : '16px'}
      bg="custom.blue.100"
      width={'calc(100% + 10vw)'}
      gap={isLargerThanTablet ? '20px' : '12px'}
      backgroundImage={isLargerThanTablet ? searchIcon : NaN}
      backgroundPosition={'right bottom'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'14em'}
    >
      <Text
        variant={'brand.h1'}
        color={'custom.blue.300'}
        align={'center'}
        marginBottom={isLargerThanTablet ? '0' : '10px'}
      >
        Найдем репетиторов под&nbsp;твои цели
      </Text>
      <Formik initialValues={initValues} onSubmit={onSubmit}>
        <Form>
          <FormBody />
        </Form>
      </Formik>
    </Flex>
  );
};
