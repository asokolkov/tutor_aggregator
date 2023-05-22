import { CardInfoProps } from './Card';
import { mapCollectionToString } from '../../utils/mapCollectionToString';
import { SingleReviewProps } from './components/SingleReview';
import { V1ReviewDto, V1TutorDto } from '../../api/models';

export function MapCardInfo(tutor: V1TutorDto): CardInfoProps {
  return {
    id: tutor.id,
    contacts:
      mapCollectionToString(tutor.contacts?.map((x) => x.value)) ||
      'Не указано',
    description: tutor.description,
    education:
      mapCollectionToString(tutor.educations?.map((x) => x.value)) ||
      'Не указано',
    fullName: `${tutor.firstName} ${tutor.lastName}`,
    location: tutor.location?.district || 'Не указано',
    requirements:
      mapCollectionToString(tutor.requirements?.map((x) => x.value)) ||
      'Не указано',
    subjects:
      mapCollectionToString(tutor.subjects?.map((x) => x.description)) ||
      'Не указано',
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
