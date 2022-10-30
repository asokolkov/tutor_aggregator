import {HStack} from '@chakra-ui/react';
const photo = require('../../img/star.png');

export const ReviewStar = ({starCount}: ReviewStarProps) => {
    if (starCount > 5) starCount = 5;
    if (starCount < 1) starCount = 1;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<img src={photo} alt={'star'}/>);
    }
    return <HStack spacing='8px'>{stars}</HStack>
}

type ReviewStarProps = {
    starCount: number
}