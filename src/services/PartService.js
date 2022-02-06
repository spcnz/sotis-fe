import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: '/api/test/part',
  ADD_TO_TEST: '/api/test/:id/part',
  ALL: 'api/part',
  TEST_PARTS: 'api/test/:id/parts'
};

class PartService extends ApiService {

  getAll = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL);

    return data;
  };

  getTestParts = async (id) => {
    const { data } = await this.apiClient.get(ENDPOINTS.TEST_PARTS.replace(":id", id));

    return data;
  };

  create = async (testId, partData) => {
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, partData);

    return data;
  };

  addPart = async (testId, partId) => {
    console.log(partId, 'iz servisa')
    const { data } = await this.apiClient.post(ENDPOINTS.ADD_TO_TEST.replace(":id", testId), { part: partId });

    return data;
  };

}

const partService = new PartService();
export default partService;