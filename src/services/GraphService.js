import ApiService from './ApiService';

const ENDPOINTS = {
  CREATE: '/api/graph',
  POST_LINK: 'api/graph/:id'
};

class GraphService extends ApiService {

  addLink = async ({ link, graphId }) => {
  
    // const { data } = await this.apiClient.get(ENDPOINTS.POST_LINK.replace(":id", graphId));
    const data = link;
    return data;
  };


}

const graphService = new GraphService();
export default graphService;