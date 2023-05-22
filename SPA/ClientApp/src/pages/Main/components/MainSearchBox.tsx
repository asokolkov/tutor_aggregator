import * as React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import searchIcon from '../../../assets/images/search_icon_bg.png';
import { FormBody } from './FormBody';
import { Form, Formik } from 'formik';
import { useFormikValues } from '../hooks/useFormikValues';
import { useSubmitButton } from '../hooks/useSubmitButton';

export const MainSearchBox: React.FC = () => {
  const { initValues } = useFormikValues();
  const { onSubmit } = useSubmitButton();

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
      <Formik initialValues={initValues} onSubmit={onSubmit}>
        <Form>
          <FormBody />
        </Form>
      </Formik>
    </VStack>
  );
};
