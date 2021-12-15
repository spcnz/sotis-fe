import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: '/api/section',
  ALL: 'api/section?part_id=:id',
  LINK: 'api/section/link'
};

class SectionService extends ApiService {

  getAll = async partId => {
    const { data } = await this.apiClient.get(ENDPOINTS.ALL.replace(":id", partId));

    return data;
  };

  create = async sectionData => {
    const { data } = await this.apiClient.post(ENDPOINTS.CREATE, {title: sectionData.title, part_id: sectionData.partId});

    return data;
  };

  linkSections = async ({ link, domainId }) => {
    const { data } = await this.apiClient.post(ENDPOINTS.LINK, link);

    return data;
  };


}

const sectionService = new SectionService();
export default sectionService;