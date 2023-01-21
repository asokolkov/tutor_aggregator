import mock from './_share';
import authUser from '../fixtures/user_authtorized.json';

if (process.env.REACT_APP_IS_USER_AUTH_MOCK === 'true')
  mock.onGet('/v1/me').reply(() => [200, authUser]);
else mock.onGet('/v1/me').reply(401);

export default mock;
