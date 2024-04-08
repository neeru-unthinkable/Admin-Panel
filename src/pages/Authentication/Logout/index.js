import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import { AUTH_CONFIG } from "../../../constants";
import APILoader from "../../../components/APILoader";
import useAdminContext from "../../../hooks/useAdminContext";
import { removeItemFromLocalStorage } from "../../../helpers/localStoragehelper";

const Logout = () => {
  const history = useHistory();
  const { clearData } = useAdminContext();

  useEffect(() => {
    removeItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO);
    clearData();
    history.replace(ROUTES.LOGIN);
  }, []);

  return <APILoader />;
};

export default Logout;
