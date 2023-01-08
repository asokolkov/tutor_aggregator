import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../_share';

export default new MockAdapter(axiosInstance, { delayResponse: 1000 });

export function createPaginatedResponse(type: Object, count: number) {
  return { items: Array.from(new Array(count)).map(() => type) };
}
