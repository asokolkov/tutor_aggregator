import * as React from 'react';
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';

const CURRENT_CITY = 'в Екатеринбурге';
const ONE_CITY_DESCRIPTION = 'Пока мы работаем только в одном городе :(';

export const CitySelection: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg={'white'}
          leftIcon={<FiMapPin />}
          iconSpacing={'5px'}
          height={'auto'}
          fontSize="xs"
          color="subtle"
          padding={'0 20px 0 0'}
          _hover={{ bg: 'white' }}
          _active={{
            bg: 'white',
            borderColor: 'white',
          }}
        >
          <Text as={'u'} _hover={{ color: 'gray' }}>
            {CURRENT_CITY}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{ONE_CITY_DESCRIPTION}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
