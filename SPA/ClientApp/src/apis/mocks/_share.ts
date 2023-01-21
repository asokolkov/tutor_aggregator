import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../_share';

export default new MockAdapter(axiosInstance, { delayResponse: 1000 });

export function generateUniqueGuid() {
  let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
  return [
    u.substr(0, 8),
    u.substr(8, 4),
    '4000-8' + u.substr(13, 3),
    u.substr(16, 12),
  ].join('-');
}

export function createPaginatedResponse(type: Object, count: number) {
  return {
    items: Array.from(new Array(count)).map(() => {
      return { ...type, id: generateUniqueGuid() };
    }),
  };
}

export const mockConfig = {
  isUserAuth: true,
};
