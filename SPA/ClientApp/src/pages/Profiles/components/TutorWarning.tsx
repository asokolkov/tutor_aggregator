import * as React from 'react';
import { useFormikContext } from 'formik';
import { TutorInitValues } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

export const TutorWarning: React.FC = () => {
  const { values } = useFormikContext<TutorInitValues>();
  useEffect(() => setWarning(values.subject === ''), [values]);
  const [isWarning, setWarning] = useState(false);

  if (!isWarning) return <div></div>;
  return (
    <Alert status="warning" w="100%">
      <AlertIcon />
      <AlertTitle>Чтобы отображаться в&nbsp;поиске, выбери предмет</AlertTitle>
    </Alert>
  );
};
