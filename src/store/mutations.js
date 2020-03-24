import { USER_INFO } from "./mutation-type";
import { setLocalStorage } from "../../config/globalSave";

export default {
  [USER_INFO](state, { userInfo }) {
    // 将传过来的userInfo保存到state里面
    state.userInfo = userInfo;
    // 存到缓存中
    setLocalStorage("userInfo", state.userInfo);
  }
};
