import useApiUrl from "@/config/url.js";
export default {
  //api地址
  apiUrl: useApiUrl,
  //axios的超时时间
  timeout: 6000,
  apiPrefix:"",
  tokenKey: "ACCSESS_TOKEN",
  //项目名称
  siteName: "react的项目",
  //axios的请求次数
  retry: 3,
  //间隔事件
  retryDelay: 800,
};
