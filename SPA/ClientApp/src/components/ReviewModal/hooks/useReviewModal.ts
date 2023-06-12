import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export function useReviewModal() {
  const [tutorId, setTutorId] = useState<string>();
  const disclosure = useDisclosure();
  const providerValue = { tutorId, setTutorId, disclosure };
  return { providerValue };
}
