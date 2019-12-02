import api from "./api";

const memberURL = "/member";

const memberAPI = {
  list: () => api.get(memberURL),
  post: data => api.post(memberURL, data),
  consult: id => api.get(`${memberURL}/${id}`)
};

export default memberAPI;
