import { AUTH_CONFIG } from "../constants";
import { getItemFromLocalStorage } from "./localStoragehelper";

const authCheck = () => {
  const user = JSON.parse(getItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO));
  if (user && user.token) return true;
  return false;
};

export default authCheck;
