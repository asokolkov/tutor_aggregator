import { CardInfoProps } from './Card';
import { mapCollectionToString } from '../../utils/mapCollectionToString';
import { SingleReviewProps } from './components/SingleReview';
import { V1ReviewDto, V1TutorDto } from '../../api/models';

export function MapCardInfo(
  tutor: V1TutorDto,
  isLoading: boolean
): CardInfoProps {
  return {
    id: tutor?.id,
    contacts: tutor?.contacts,
    description: tutor?.description,
    education:
      mapCollectionToString(tutor?.educations?.map((x) => x.value)) ||
      'Не указано',
    fullName: `${tutor?.firstName} ${tutor?.lastName}`,
    location: tutor?.location?.district || 'Не указано',
    job: tutor?.job,
    requirements:
      mapCollectionToString(tutor?.requirements?.map((x) => x.value)) ||
      'Не указано',
    subjects:
      mapCollectionToString(tutor?.subjects?.map((x) => x.description)) ||
      'Не указано',
    isLoading,
  };
}

export function MapSingleReview(review: V1ReviewDto): SingleReviewProps {
  return {
    date: new Date(review.updatedAt)
      .toISOString()
      .split('T')[0]
      .split('-')
      .reverse()
      .join('.'),
    fullName: review.student,
    rating: review.rating,
    text: review.description,
  };
}
