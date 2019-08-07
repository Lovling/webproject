import axios from "axios";
import qs from "qs";

axios.defaults.timeout = 5000; //响应超时时间
axios.defaults.headers.post["Content-Type"] = "application/json";

export const publicPath = "http://elema.com";

axios.defaults.baseURL = publicPath;

// post 传参序列化
axios.interceptors.request.use(
  config => {
    config.method === "post" && (config.data = qs.stringify(config.data));
    return config;
  },
  error => Promise.reject(error)
);

// axios的二次封装
const service = (url, method = "GET", data) => {
  return new Promise((resolve, reject) => {
    axios((url, method, data))
      .then(
        response => resolve(response.data),
        err => {
          console.log(err.data.retMsg);
        }
      )
      .catch(error => reject(error.data));
  });
};

export default service;
