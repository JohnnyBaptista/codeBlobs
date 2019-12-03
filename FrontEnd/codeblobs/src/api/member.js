import api from "./api";

const memberURL = "/member";

const memberAPI = {
  list: id => api.get(`${memberURL}s/${id}`),
  post: data => api.post(memberURL, data),
  getNum: () => api.get(`${memberURL}s/group`),
  consult: id => api.get(`${memberURL}/${id}`)
};

export default memberAPI;
