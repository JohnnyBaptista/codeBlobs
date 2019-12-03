import api from "./api";

const typeURL = "/type";

const typeAPI = {
  list: () => api.get(typeURL),
  post: data => api.post(typeURL, data),
};

export default typeAPI;
