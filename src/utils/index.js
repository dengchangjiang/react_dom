import Storage from "good-storage";
import Config from "@/config/index";
/**
 * 当前页面参数
 * @returns {*token}
 */
export function currentUrlToParams(key = null) {
  let paramsUrl = window.location.href.split("?");
  if (paramsUrl.length < 2) return key ? null : {};
  let paramsArr = paramsUrl[1].split("&");
  let paramsData = {};
  paramsArr.forEach((r) => {
    let data = r.split("=");
    paramsData[data[0]] = data[1];
  });
  if (key) return paramsData.hasOwnProperty(key) ? paramsData[key] : null;
  return paramsData;
}
/**
 * 重置对象参数
 * @params -> Object
 * @arg = Array => []
 * @arg = Boolean => false
 * @arg = Number => null
 * @arg = String => ''
 * */
export function resetArgs(args, def = {}) {
  for (let key in args) {
    if (def.hasOwnProperty(key)) {
      args[key] = def[key];
    } else {
      if (Array.isArray(args[key])) args[key] = [];
      if ("string" == typeof args[key]) args[key] = "";
      if ("number" == typeof args[key]) args[key] = null;
      if ("boolean" == typeof args[key]) args[key] = false;
    }
  }
}
/**
 * 完整匹配对象
 * @param obj
 * @param row
 */
export function fillerLeft(obj, row = {}) {
  for (let key in obj) {
      if (row.hasOwnProperty(key) && row[key] !== null && row[key] !== undefined) {
          obj[key] = row[key]
      }
  }
}
/**
 * 获取Token
 * @returns {*token}
 */
export function getToken() {
  return Storage.get(Config.tokenKey) || "";
}
/**
 * 存储Token
 * @returns {*|undefined}
 */
export function setToken(token) {
  Storage.set(Config.tokenKey, token || "");
}
/**
 * 移除Token
 * @returns {*|undefined}
 */
export function removeToken() {
  Storage.remove(Config.tokenKey);
}
