import {Avatar, Text, HStack, Stack} from '@chakra-ui/react';
import {ReviewStar} from './ReviewStar';

export const Review = (props: ReviewProps) => {
    return (
        <div>
            <HStack marginTop={'16px'}>
                <Avatar name={props.name} showBorder={true}
                        src={props.avatar}
                        size='md'
                />
                <Text as={'b'} paddingLeft={'8px'}>{props.name}</Text>
                <ReviewStar starCount={5}/>
            </HStack>
            <Stack paddingLeft={'64px'}>
                <Text>{props.review}</Text>

            </Stack>
        </div>
    );
};

export type ReviewProps = {
    name: string,
    review: string,
    rating: number,
    avatar: string,
};