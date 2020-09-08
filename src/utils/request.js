import Config from "@/config/index.js";
import Axios from "axios";
import { removeToken } from "@/utils/index";

const service = Axios.create({
  baseURL: Config.apiUrl + "/" + Config.apiPrefix,
  headers: {
    Accept: "*/*",
  },
  timeout: Config.timeout,
});
service.defaults.retry = Config.retry;
service.defaults.retryDelay = Config.retryDelay;
service.interceptors.response.use(
  (config) => {
    config.headers["Authorization"] = "";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    let res = response;
    if (res.status !== 200) {
      Promise.reject("请求出错，请稍后重试");
    } else {
      if (res.data.code !== 100000) {
        if (res.data.code === 100004) {
          removeToken();
          window.location.href = "./#/login"
        }
        return Promise.reject(res.data.msg);
      }
      return Promise.resolve(res.data.data);
    }
  },
  (error) => {
    return Promise.reject("接口出错，请稍后重试");
  }
);
