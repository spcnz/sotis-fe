import ApiService from './ApiService';

const ENDPOINTS = {
  ALL: 'api/subject'
};

class SubjectService extends ApiService {

  getAll = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL);

    return data;
  };

}

const subjectService = new SubjectService();
export default subjectService;