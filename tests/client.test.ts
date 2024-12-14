import { ShoraCloudClient } from '../src/core/client';

describe('ShoraCloudClient', () => {
  const client = new ShoraCloudClient({
    apiKey: 'test-api-key',
    baseURL: 'https://api.test.shoracloud.com',
  });

  test('should create client instance', () => {
    expect(client).toBeInstanceOf(ShoraCloudClient);
  });

  // Add more tests here
});
