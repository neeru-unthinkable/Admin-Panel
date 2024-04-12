import { toast } from "react-toastify";
import { getItemFromLocalStorage } from "./localStoragehelper";
import { AUTH_CONFIG } from "../constants";

const displayToast = (message, type = "success", timeout = 2000) =>
  toast[type](message, {
    autoClose: timeout,
    theme: "colored",
  });

const isAuthenticated = () => {
  const user = getItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO, true);
  return user && user.token;
};

export { displayToast, isAuthenticated };
