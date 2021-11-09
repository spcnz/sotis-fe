import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: 'api/test',
  ALL: 'api/test?subject_id=:id'
};

class TestService extends ApiService {

  create = async testData => {
    testData['subject_id'] = 1;
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, {... testData, time_limit_seconds: testData.time_limit_seconds *60});

    return data;
  };

  getAll = async subjectId => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", subjectId));

    return data;
  };

}

const testService = new TestService();
export default testService;