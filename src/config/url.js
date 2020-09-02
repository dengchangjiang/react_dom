const devapi = "http://192.168.48.192:9088";

let useApiUrl;
if (process.env.NODE_ENV === "development") {
  useApiUrl = devapi;
} else {
  switch (process.env.REACT_APP_MODE) {
    case "buildDev":
      useApiUrl = "http://192.168.48.192:9088";
      break;
    case "buildTest":
      useApiUrl = "http://192.168.48.192:9188";
      break;
    case "buildRelease":
      useApiUrl = "https://hsjapidev.hulian120.com";
      break;
    default:
      useApiUrl = "https://hsjapi.hulian120.com";
      break;
  }
}
export default useApiUrl;
