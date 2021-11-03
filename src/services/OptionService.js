import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: '/api/option',
  ALL: 'api/option?item_id=:id'
};

class OptionService extends ApiService {

  getAll = async itemId => {
  
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", itemId));

    return data;
  };

  create = async optionData => {
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, {
      label: optionData.label,
      item_id: optionData.itemId,
      correct_answer: optionData.correct,
      name: optionData.name
    });

    return data;
  };

}

const optionService = new OptionService();
export default optionService;