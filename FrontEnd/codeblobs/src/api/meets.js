import api from "./api";

const meetsURL = "/meets";

const meetsAPI = {
  list: () => api.get(`${meetsURL}/group`),
  post: data => api.post(meetsURL, data)
};

export default meetsAPI;
