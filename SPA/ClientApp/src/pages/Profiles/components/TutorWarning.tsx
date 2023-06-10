import * as React from 'react';
import { useFormikContext } from 'formik';
import { TutorInitValues } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  useBreakpointValue,
} from '@chakra-ui/react';

export const TutorWarning: React.FC = () => {
  const { values } = useFormikContext<TutorInitValues>();
  useEffect(() => setWarning(values.subject === ''), [values]);
  const [isWarning, setWarning] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (!isWarning) return <div></div>;
  return (
    <Alert
      status="warning"
      margin={`0 ${isDesktop ? '26px' : '0'} 0 ${isDesktop ? '140px' : '0'}`}
      w="auto"
    >
      <AlertIcon />
      <AlertTitle>
        При невыбранном предмете вы не будете отображены в поиске
      </AlertTitle>
    </Alert>
  );
};
