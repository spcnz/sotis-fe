import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: 'api/part',
  ALL: 'api/part/test_id=:id'
};

class PartService extends ApiService {

  getAll = async testId => {
    // const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", testId));
    return [{'title': 'Prvi part', 'id': 1}, {'title': 'Drugi part', 'id': 2}]
    // return data;
  };

}

const partService = new PartService();
export default partService;