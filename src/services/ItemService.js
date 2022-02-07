import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: '/api/item',
  ALL: 'api/item?section_id=:id',
  FIRST: 'api/test/:id/start',
  SUBMIT: 'api/itemresult/answer'
};

class ItemService extends ApiService {

  getAll = async sectionId => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", sectionId));

    return data;
  };

  getById = async id => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", id));

    return data;
  };

  getFirstQuestion = async id => {
    const { data } = await this.apiClient.get(ENDPOINTS.FIRST.replace(":id", id));

    return data;
  };

  submitAnswer = async responses => {
    const { data } = await this.apiClient.post(ENDPOINTS.SUBMIT, responses);

    return data;
  };

  create = async itemData => {
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, {
      max_choices: itemData.maxChoices,
      part_id: itemData.partId,
      question: itemData.question,
      score: itemData.score,
      section_id: itemData.sectionId
    });

    return data;
  };

}

const itemService = new ItemService();
export default itemService;