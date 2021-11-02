import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: 'api/test'
};

class TestService extends ApiService {

  create = async testData => {
    // const { data } = await this.apiClient.post(ENDPOINTS.CREATE, testData);
    return { id: 1}
    // return data;
  };

}

const testService = new TestService();
export default testService;