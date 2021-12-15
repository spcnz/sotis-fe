import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: 'api/test',
  ALL: 'api/test?subject_id=:id',
  GET_ONE:  'api/test/:id',
  SUBMIT:  'api/itemresult',
  GENERATE: 'api/itemresult/generate'
};

class TestService extends ApiService {

  create = async testData => {
    testData['subject_id'] = 1;
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, {...testData, time_limit_seconds: testData.time_limit_seconds *60});

    return data;
  };

  getAll = async subjectId => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", subjectId));

    return data;
  };

  getById = async id => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_ONE.replace(":id", id));

    return data;
  };

  submit = async test => {
    console.log('odavde', test);
    const { data } = await this.apiClient.post(ENDPOINTS.SUBMIT, { reponses: test });

    return data;
  };

  generateResults = async testId => {
    console.log('odavde', testId);
    const { data } = await this.apiClient.get(ENDPOINTS.GENERATE);

    return data;
  };
}

const testService = new TestService();
export default testService;