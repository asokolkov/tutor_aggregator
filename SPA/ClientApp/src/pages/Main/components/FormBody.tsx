import * as React from 'react';
import { SelectOptions } from './SelectOptions';
import { Button, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { SearchParamsContext } from '../../../contexts/SearchParamsContext';

export const FormBody: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-unused-vars
  const REMOVE_removeDuplicates = (array: string[]) => {
    return array.filter((item, pos, self) => self.indexOf(item) == pos);
  };

  const { subjectsData, locationsData } = useContext(SearchParamsContext);
  return (
    <HStack justify={'center'} width={'100%'} align={'flex-end'}>
      <SelectOptions
        label={'Предмет'}
        options={REMOVE_removeDuplicates(
          subjectsData.map((subject) => subject.description)
        )}
        name="subject"
        placeholder="Любой"
      />
      <SelectOptions
        label={'Район'}
        options={REMOVE_removeDuplicates(
          locationsData.map((location) => location.district)
        )}
        name="district"
        placeholder="Любой"
      />
      <Button variant="green" minWidth={'160px'} type="submit">
        Найти
      </Button>
    </HStack>
  );
};
