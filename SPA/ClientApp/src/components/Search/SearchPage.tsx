import {
    ChakraProvider,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    StackDivider,
    VStack,
    Heading,
    Button,
} from "@chakra-ui/react";
import Theme from '../../theme/index'
import {SearchCardInfo} from "./SearchCardInfo";
import {SelectOptions} from "./SelectOptions";

export const SearchPage = () => {
    return (
        <ChakraProvider theme={Theme}>
            <Flex background="gray.50" height={'100vh'} direction={'column'}>
                <Heading as='h3' size='xl' margin={'3% 3% 0 3%'}>
                    Поиск наставника
                </Heading>
                <VStack divider={<StackDivider borderColor='gray.200'/>} background={'white'}
                        borderRadius={'5px'} borderWidth={'1px'} margin={'3%'}>
                    <HStack margin={'20px'} spacing={15} width={'90%'} align={'flex-end'} >
                        <FormControl>
                            <FormLabel></FormLabel>
                            <Input type='search' placeholder='Найти наставника'/>
                        </FormControl>
                        <Button colorScheme={'blue'} width={'240px'} margin={'auto 0'}>
                            Найти
                        </Button>
                        <FormControl>
                            <FormLabel>Цена за занятие</FormLabel>
                            <NumberInput step={100} max={5000} min={200}>
                                <NumberInputField/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper/>
                                    <NumberDecrementStepper/>
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </HStack>
                    <HStack margin={'20px'} width={'90%'} spacing={15}>
                        <SelectOptions
                            title={"Город"}
                            placeholder={"Екатеринбург"}
                            options={['Верхняя Пышма', 'Первоуральск']}/>

                        <SelectOptions
                            title={"Район"}
                            placeholder={"Ленинский"}
                            options={['Чкаловский', 'Верх-Исетский']}/>

                        <SelectOptions
                            title={"Предметная область"}
                            placeholder={"Программирование"}
                            options={['Математика', 'История']}/>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack align={'flex-start'} justify={'space-around'}>
                        <SearchCardInfo name={'Егоров Павел Владимирович'} imgSrc={''} job={'Старший преподаватель'}
                                        occupation={'Матмех УрФУ'}
                                        rating={{count: 25, average: 4.7}}></SearchCardInfo>
                        <SearchCardInfo name={'Михаил'} imgSrc={''} job={'Бэкенд-разработчик'} occupation={'СКБ Контур'}
                                        rating={{count: 15, average: 4.77}}></SearchCardInfo>
                        <SearchCardInfo name={'Анастасия'} imgSrc={''} job={'Фронтенд-разработчик'} occupation={'Яндекс'}
                                        rating={{count: 5, average: 4.6}}></SearchCardInfo>
                    </HStack>
                </VStack>
            </Flex>
        </ChakraProvider>
    );
}