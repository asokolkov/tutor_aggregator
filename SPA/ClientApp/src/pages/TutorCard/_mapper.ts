import { Tutor } from '../../api/tutors';
import { CardInfoProps } from './CardInfo';
import { mapCollectionToString } from './components/_helpers';

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
