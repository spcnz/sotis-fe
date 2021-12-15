import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: '/api/test/part',
  ALL: 'api/part?test_id=:id'
};

class PartService extends ApiService {

  getAll = async testId => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", testId));

    return data;
  };

  create = async (testId, partData) => {
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, partData);

    return data;
  };

}

const partService = new PartService();
export default partService;