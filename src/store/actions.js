import { USER_INFO } from "./mutation-type";
import { setLocalStorage } from "../../config/globalSave";
export default {
  // 同步用户信息
  saveUserInfo({ commit }, userInfo) {
    commit(USER_INFO, { userInfo });
  }
};
