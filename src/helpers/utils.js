import { toast } from "react-toastify";


const displayToast = (message, type = "success", timeout = 3000) =>
  toast[type](message, {
    autoClose: timeout,
    theme: "colored",
});

export {displayToast};