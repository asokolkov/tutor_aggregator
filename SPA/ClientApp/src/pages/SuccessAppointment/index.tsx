import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Color } from '../../assets/theme/themeEnum';
import { MAIN_PAGE } from '../../routes/routePaths';
import { Link } from 'react-router-dom';
import { SuccessSection } from './components/SuccessSection';
import { MoreInfoSection } from './components/MoreInfoSection';

export const SuccessfulAppointmentPage: React.FC = () => {
  return (
    <>
      <Link to={MAIN_PAGE}>
        <Text variant="misc.link" color={Color.blue300} padding={'0 0 10px 0'}>
          <ArrowBackIcon />
          Вернуться на главную
        </Text>
      </Link>
      <SuccessSection />
      <MoreInfoSection />
    </>
  );
};
