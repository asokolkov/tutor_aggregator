import {Avatar, Box, Flex, Heading, Button, VStack} from '@chakra-ui/react'

export const SearchCardInfo = (props: SearchCardInfoProps) => {
    const {name, imgSrc, job, occupation, rating} = props;
    return (
        <Flex width={'30%'} direction={'column'} align={'center'} height={'100%'} background={'white'} padding={'20px'}
              borderRadius={'5px'} borderWidth={'1px'} justifyContent={'space-between'}>
            <Avatar name={name} showBorder={true}
                    src={imgSrc}
                    size='2xl'/>
            <VStack>
                <Heading as='h4' size='xl' textAlign={'center'}>{name}</Heading>
                <Box>
                    {job}
                </Box>
                <Box>
                    {occupation}
                </Box>
                <Box>
                    {rating.average}
                </Box>
            </VStack>
            <Button colorScheme={"teal"}>Посмотреть профиль</Button>
        </Flex>
    );
}


export type SearchCardInfoProps = {
    name: string,
    imgSrc: string,
    job: string,
    occupation: string,
    rating: {
        count: number,
        average: number,
    }
}