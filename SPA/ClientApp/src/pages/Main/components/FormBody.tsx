import * as React from 'react';
import { SelectOptions } from './SelectOptions';
import { Button, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { SearchParamsContext } from '../contexts/SearchParamsContext';

export const FormBody: React.FC = () => {
  const { subjectsData, locationsData } = useContext(SearchParamsContext);
  return (
    <HStack justify={'center'} width={'100%'} align={'flex-end'}>
      <SelectOptions
        label={'Предмет'}
        options={subjectsData.map((subject) => subject.description)}
        name="subject"
        placeholder="Любой"
      />
      <SelectOptions
        label={'Район'}
        options={locationsData.map((location) => location.district)}
        name="district"
        placeholder="Любой"
      />
      <Button variant="green" minWidth={'160px'} type="submit">
        Найти
      </Button>
    </HStack>
  );
};
