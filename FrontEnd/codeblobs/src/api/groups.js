import api from './api.js';

const groupsURL  = '/groups';

const groupsAPI = {
  list: () => api.get(groupsURL),
  post: (data) => api.post(groupsURL, data),
};

export default groupsAPI;