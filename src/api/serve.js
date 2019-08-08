// API REQUEST CONFIGURATION CENTER
import axios from "axios";
import qs from "qs";

axios.defaults.timeout = 5000; // 响应的超时时间
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 开发环境 模拟数据
export const baseURL = "http://serviceSell.com";

axios.defaults.baseURL = baseURL;

/*
  后台状态码：
    SUCCESS("0000", "执行成功!"),
    SAVE_FAIL("9001", "保存失败"),
    ROOM_LEFT("9002", "房间数量不足"),
    DAYS_LIMIT("9003", "短期不能超过3天"),
    NO_REACTION("9004", "已体验尚未反馈"),
    AHEAD_WEEK("9005", "请提前一周进行操作"),
    AUTH_FAIL("9006", "尚未认证"),
    COMPLETE_USER("9006", "请完善用户信息"),
    FAILURE("9999", "服务调用失败");
*/
// POST传参序列化
axios.interceptors.request.use(
  config => {
    config.method === "post" && (config.data = qs.stringify(config.data));
    return config;
  },
  error => Promise.reject(error)
);

// 返回状态判断
// axios.interceptors.response.use(res => {
//   if (res.data.retCode !== '0000') {
//     return Promise.reject(res)
//   }
//   return res
// }, error => Promise.reject(error))

// 对axios二次封装
const fetch = (url, method = "get", data) => {
  return new Promise((resolve, reject) => {
    axios({ url, method, data })
      .then(
        response => resolve(response.data),
        err => {
          console.log(err.data.retMsg);
        }
      )
      .catch(error => reject(error.data));
  });
};
export default fetch;
