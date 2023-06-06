import * as React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Ошибка!</h1>
      <p>
        Простите, во время загрузки страницы произошла ошибка! Попробуйте еще
        раз позже
      </p>
      <p>
        <i>{isRouteErrorResponse(error) && error.statusText}</i>
      </p>
    </div>
  );
};
