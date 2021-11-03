import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: 'api/test'
};

class TestService extends ApiService {

  create = async testData => {
    testData['subject_id'] = 1;
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, testData);

    return data;
  };

}

const testService = new TestService();
export default testService;