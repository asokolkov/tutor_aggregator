import { useParams } from 'react-router-dom';

export const useTutorId = () => {
  const { tutorId } = useParams();
  return tutorId;
};
