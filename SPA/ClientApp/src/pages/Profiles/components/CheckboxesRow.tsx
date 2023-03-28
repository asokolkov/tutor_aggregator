import * as React from 'react';
import {
  FormControl,
  FormLabel,
  Flex,
  Stack,
  CheckboxGroup,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { ProfilePageProps } from './share';

type Props = ProfilePageProps & {
  options: Array<string>;
  label: string;
  checkedOptions: Array<string>;
  tooltip: JSX.Element[];
};

export const CheckboxesRow: React.FC<Props> = (props) => {
  const options = props.options.map((option) => (
    <Checkbox value={option} color={'#000000'}>
      {option}
    </Checkbox>
  ));
  return (
    <Flex width={'100%'} margin={'0 0 10px 0'}>
      <FormControl
        display={'flex'}
        alignItems={'center'}
        isRequired={props.isRequired}
      >
        <FormLabel
          fontSize={'xl'}
          margin={'auto 10px auto 0'}
          flex={'0 0 130px'}
          textAlign={'right'}
        >
          {props.label}
        </FormLabel>
        <Accordion
          width={'100%'}
          bg={'#ffffff'}
          color={'black'}
          borderRadius={'5px'}
          borderWidth={'1px'}
          allowToggle
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  textDecoration={'underline'}
                >
                  Открыть список
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup defaultValue={props.checkedOptions}>
                <Stack spacing={[1, 2]} direction={'column'}>
                  {options}
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {props.tooltip}
      </FormControl>
    </Flex>
  );
};
