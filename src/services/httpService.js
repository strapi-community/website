import axios from "axios";

// am deranay xwarawa bo grtni hallay unexpected Errora
// wa bo globala wata bo hamu methodakani (delete w update w get w add) eish dakat
axios.interceptors.response.use(null, function (error) {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    console.log("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
