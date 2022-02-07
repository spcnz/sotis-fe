import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: 'api/test',
  ALL: 'api/test?subject_id=:id',
  GET_ONE:  'api/test/:id',
  SUBMIT:  'api/itemresult',
  COMPARE: 'api/itemresult/generate'
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

  compareResults = async domainId => {
    const { data } = await this.apiClient.get(ENDPOINTS.COMPARE);
    const ks_expected = [
      { id: 0, problem: [], target_problems: [{
        domain_id: 1, id: 1, iita_generated:true, problem : [{id:2}, {id: 4}]
      }]},
      { id: 1, problem: [{id: 2}, {id: 4}], target_problems: [{
        domain_id: 1, id: 2, iita_generated:true, problem : [{id: 3}, {id:5}]
      }]},
      { id: 6, problem: [{id: 2}, {id: 4}], target_problems: [{
        domain_id: 1, id: 2, iita_generated:true, problem : [{id: 1}]
      }]},
      { id: 2, problem: [{id: 3}, {id: 5}], target_problems: [{
        domain_id: 1, id: 4, iita_generated:true, problem : [{id:1},{id:2},  {id: 3},{id: 4}, {id: 5}]
      }]},
      { id: 3, problem: [{id: 1}], target_problems: [{
        domain_id: 1, id: 4, iita_generated:true, problem : [{id:1},{id:2},  {id: 3},{id: 4}, {id: 5}]
      }]},
      { id: 4, problem: [{id:1},{id:2},  {id: 3},{id: 4}, {id: 5}], target_problems: []},
    ]

   
    // return data;
    return {"ks_expected": ks_expected, "ks_real": data, "distance": 0.015}
  };
}

const testService = new TestService();
export default testService;