import axios from "axios";
import qs from "qs";

axios.defaults.timeout = 5000; //响应超时时间
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

export const baseURL = "http://serviceSell.com";

axios.defaults.baseURL = baseURL;

// post 传参序列化
axios.interceptors.request.use(
  config => {
    config.method === "post" && (config.data = qs.stringify(config.data));
    return config;
  },
  error => Promise.reject(error)
);

// axios的二次封装
const serve = (url, method = "GET", data) => {
  return new Promise((resolve, reject) => {
    axios((url, method, data))
      .then(
        response => resolve(response.data),
        err => {
          console.log(err.data.retMsg);
        }
      )
      .catch(error => reject(error.data));
  }).catch(function(reason) {
    //有选择性的在此处抛出错误或不抛出
    console.log("catch:", reason);
  });
};

export default serve;
