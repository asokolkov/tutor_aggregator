import * as React from 'react';
import { FormControl, HStack, Switch, Text } from '@chakra-ui/react';
import { useField } from 'formik';

export const TutorOrStudentSwitchField: React.FC = () => {
  const [field] = useField({ name: 'isTutor' });
  return (
    <FormControl>
      <HStack justify="center">
        <Text fontSize="md" whiteSpace="nowrap" color="muted">
          Ученик
        </Text>
        <Switch size="lg" colorScheme="Gray 200" id="isRequired" {...field} />
        <Text fontSize="md" whiteSpace="nowrap" color="muted">
          Репетитор
        </Text>
      </HStack>
    </FormControl>
  );
};
