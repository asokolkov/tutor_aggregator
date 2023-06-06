import * as React from 'react';
import { HStack, Text, Image, VStack, Flex, Button } from '@chakra-ui/react';
import teacherIcon from '../../assets/images/teacher_icon.png';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { AxiosError } from 'axios';
import { MAIN_PAGE } from '../../routes/routePaths';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;
  const isNetworkError =
    error instanceof AxiosError && error.message === 'Network Error';

  let errorMessage: string;
  if (isNotFound) errorMessage = 'Страница не найдена';
  else if (isNetworkError) errorMessage = 'Проверьте соединение с интернетом';
  else errorMessage = 'Пожалуйста, повторите попытку позже';

  return (
    <Flex align="center" justify="center" minH="100vh">
      <HStack spacing="64px">
        {!isNetworkError && <Image src={teacherIcon} w="312px" />}
        <VStack spacing="32px">
          <VStack>
            <Text variant="regular.h1">Произошла ошибка!</Text>
            <Text variant="regular.h2">{errorMessage}</Text>
          </VStack>

          {isNotFound ? (
            <Link to={MAIN_PAGE}>
              <Button>Вернуться на главную</Button>
            </Link>
          ) : (
            <Button onClick={() => window.location.reload()}>
              Обновить страницу
            </Button>
          )}
        </VStack>
      </HStack>
    </Flex>
  );
};
