import mock, { mockConfig } from './_share';
import authUser from '../fixtures/user_authtorized.json';

if (mockConfig.isUserAuth)
  mock.onGet('/v1/current').reply(() => [200, authUser]);
else mock.onGet('/v1/current').reply(401);

export default mock;
