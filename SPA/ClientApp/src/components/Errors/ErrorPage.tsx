import * as React from 'react';
import { HStack, Text, Image, VStack, Flex } from '@chakra-ui/react';
import teacherIcon from '../../assets/images/teacher_icon.png';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { AxiosError } from 'axios';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const isNetworkError =
    error instanceof AxiosError && error.message === 'Network Error';

  return (
    <Flex align="center" justify="center" minH="100vh">
      <HStack spacing="64px">
        {!isNetworkError && <Image src={teacherIcon} w="312px" />}
        <VStack>
          <Text variant="regular.h1">Произошла ошибка!</Text>
          <Text variant="regular.h2">Пожалуйста, повторите попытку позже</Text>
          <Text>
            {isRouteErrorResponse(error) &&
              error.status === 404 &&
              'Страница не найдена'}
          </Text>
          <Text>
            {error instanceof AxiosError &&
              'Произошла ошибка при запросе. Пожалуйста, повторите поптыку позже.'}
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
};
