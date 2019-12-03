import api from "./api";

const groupsURL = "/groups";

const groupsAPI = {
  list: () => api.get(groupsURL),
  get: id => api.get(`${groupsURL}/${id}`),
  post: data => api.post(groupsURL, data)
};

export default groupsAPI;
