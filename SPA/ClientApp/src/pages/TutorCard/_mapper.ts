import { Review, Tutor } from '../../api/tutors';
import { CardInfoProps } from './CardInfo';
import { mapCollectionToString } from './components/_helpers';
import { SingleReviewProps } from './components/SingleReview';

export function MapCardInfo(tutor: Tutor): CardInfoProps {
  return {
    id: tutor.id,
    contacts:
      mapCollectionToString(tutor.contacts?.map((x) => x.value)) ||
      'Не указано',
    avatar: tutor.avatar,
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

export function MapSingleReview(review: Review): SingleReviewProps {
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
